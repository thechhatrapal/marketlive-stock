const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

const FyersAPI = require("fyers-api-v3");
const fyers = new FyersAPI.fyersModel();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

fyers.setAppId('CZLS7H8N0V-100');
fyers.setRedirectUrl('https://myapi.fyers.in/dashboard');

const authCode = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJpYXQiOjE3MDIyNzQwNDMsImV4cCI6MTcwMjMwNDA0MywibmJmIjoxNzAyMjczNDQzLCJhdWQiOiJbXCJ4OjBcIiwgXCJ4OjFcIiwgXCJ4OjJcIiwgXCJkOjFcIiwgXCJkOjJcIiwgXCJ4OjFcIiwgXCJ4OjBcIl0iLCJzdWIiOiJhdXRoX2NvZGUiLCJkaXNwbGF5X25hbWUiOiJYSzMwMzcxIiwib21zIjoiSzEiLCJoc21fa2V5IjoiMzQ3OTRkOTFlMGQ5YWM4MmVkODIwYmViZGMwNTM5YzM1MmZmOGQ2ZGM1NjgxMDM5NDBiZDBmNjYiLCJub25jZSI6IiIsImFwcF9pZCI6IkNaTFM3SDhOMFYiLCJ1dWlkIjoiMWIxN2EyOWMyZjQ0NGIyYmI4YTA5OTdjMWQ5MDQyNDQiLCJpcEFkZHIiOiIwLjAuMC4wIiwic2NvcGUiOiIifQ.RWbcbAkuhXIZjF0GmjSV23Lq5C7x9c4PsIwhKIJJrIk"; // Replace with the actual authorization code obtained from the user
const secretKey = "K5139QZVEQ"; 

fyers.generate_access_token({ "secret_key": secretKey, "auth_code": authCode })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`WebSocket Server is running at http://localhost:${port}`);
});
