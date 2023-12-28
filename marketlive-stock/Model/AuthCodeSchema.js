const mongoose = require('mongoose');

const authCodeSchema = new mongoose.Schema({
  authCode: {
    type: String,
    // required: true,
  },
});

const authCode = mongoose.model('AuthCode', authCodeSchema);

module.exports = authCode