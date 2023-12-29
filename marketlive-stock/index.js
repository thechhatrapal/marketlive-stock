const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ConnectDb = require("./config/db");
const app = express();
const FyersSocket = require("fyers-api-v3").fyersDataSocket;
const FyersAPI = require("fyers-api-v3");
const blogRoutes = require("./routes/blog.routes");
const userRoutes = require("./routes/user.routes");
const path = require("path");
const authcodeRoute = require("./routes/authcode.routes");
const { CommoditySymbols, Symbols } = require("./constants");
const tokenAuthorizationRoute = require('./routes/tokenauth.routes')
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

 app.listen(5000, () => {
  console.log(`WebSocket Server is running at http://localhost:${5000}`);
});


let fyersdata

const fyers = new FyersAPI.fyersModel();
fyers.setAppId(process.env.FYRES_CLIENT_ID);
fyers.setRedirectUrl(process.env.FYRES_REDIRECT_URL);

// db
ConnectDb();

// routes
app.use("/", blogRoutes);
app.use("/auth", userRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/save", authcodeRoute);
app.use('/token', tokenAuthorizationRoute)

app.get("/authgenerateurl", (req, res) => {
  let fyers = new FyersAPI.fyersModel();
  fyers.setAppId(process.env.FYRES_CLIENT_ID);
  fyers.setRedirectUrl(process.env.FYRES_REDIRECT_URL);
  var generateAuthcodeURL = fyers.generateAuthCode();
  res.send(generateAuthcodeURL);
});

app.post('/setfiresData', async (req,res) => {
  try {
    if (fyersdata && fyersdata.connect) {
      fyersdata.close();
    }

    fyersdata = await FyersSocket.getInstance(`${process.env.FYRES_CLIENT_ID}:${req.body.token}`);
    fyersdata.autoreconnect();
    res.send({ message: 'FyersData initialized successfully' });
  } catch (error) {
    console.error('Error initializing FyersData:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

})

app.post("/allStockData", async (req, res) => {
  try {
    if (!fyersdata || !fyersdata.connect) {
      throw new Error('FyersData not initialized or not connected.');
    }
    let data = [];    
    function onmsg(message) {
      if (message.symbol) {
        data.push(message);
        if (
          data.length ===
          (req.body.symbol === "mcx"
            ? CommoditySymbols.length
            : Symbols.length - 1)
        ) {
          res.send(data);
        }
      }
    }

    function onconnect() {
      let sy = req.body.symbol === "mcx" ? CommoditySymbols : Symbols;
      fyersdata.subscribe(sy);
      fyersdata.autoreconnect();
    }

    function onerror(err) {
      console.log(err);
    }

    function onclose() {
      console.log("socket closed");
    }

    fyersdata.on("message", onmsg);
    fyersdata.on("connect", onconnect);
    fyersdata.on("error", onerror);
    fyersdata.on("close", onclose);
    fyersdata.connect();
  } catch (error) {
    console.error('Error in allStockData route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

