const express = require("express");
const router = express.Router();
const FyersAPI = require("fyers-api-v3");
const fyers = new FyersAPI.fyersModel();
const RefreshToken = require('../Model/TokenSchema')
const AuthCode = require("../Model/AuthCodeSchema");
const axios = require("axios");
const crypto = require("crypto");

fyers.setAppId(process.env.FYRES_CLIENT_ID);
fyers.setRedirectUrl(process.env.FYRES_REDIRECT_URL);

router.get("/authgenerateurl", (req, res) => {
    var generateAuthcodeURL = fyers.generateAuthCode();
    res.send(generateAuthcodeURL);
  });

  router.get("/getrefreshtoken", async (req, res) => {
    let auth_code = await AuthCode.find({});
    const authcode = auth_code[0].authCode;
    const secretKey = process.env.SECRET_KEY;
    fyers
      .generate_access_token({
        secret_key: secretKey,
        auth_code: authcode,
        app_id: process.env.FYRES_CLIENT_ID,
        secret_id: process.env.SECRET_KEY,
      })
      .then(async(response) => {
        try {
          await RefreshToken.deleteMany()
          const authCodeEntry = new RefreshToken({ refreshToken: response.refresh_token });
          await authCodeEntry.save();
      
          res.status(201).json({ message: 'refresh token saved successfully' });
        } catch (error) {
          console.error('Error saving auth code:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      })
      .catch((error) => {
        console.log(error, 'errr');
      });
  });

  router.get("/authorization", async (req, res) => {
    let refresh_token = await RefreshToken.find({});
    const appId = process.env.FYRES_CLIENT_ID;
    const appSecret = process.env.SECRET_KEY;
    const refreshToken = refresh_token[0].refreshToken;
    const hash = crypto.createHash("sha256");
    const appIdHash = hash.update(`${appId}${appSecret}`).digest("hex");
  
    const url = "https://api-t1.fyers.in/api/v3/validate-refresh-token";
    const datas = {
      grant_type: "refresh_token",
      appIdHash: appIdHash,
      refresh_token:refreshToken,
      pin: "1204",
    };
  
    const headers = {
      "Content-Type": "application/json",
    };
  
    axios
      .post(url, datas, { headers })
      .then( (response) => {
        res.send(response.data.access_token)
     })
      .catch((error) => {
        console.error("Error:", error);
      });
  
  });

module.exports = router;
