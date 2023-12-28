// routes/authCodeRoutes.js
const express = require("express");
const router = express.Router();
const AuthCode = require('../Model/AuthCodeSchema');

router.post('/auth-code', async (req, res) => {
    try {
      const { authCode } = req.body; // Corrected the field name here
      await AuthCode.deleteMany()
      
      // Save the auth code to the database
      const authCodeEntry = new AuthCode({ authCode });
      await authCodeEntry.save();
  
      res.status(201).json({ message: 'Auth code saved successfully' });
    } catch (error) {
      console.error('Error saving auth code:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});



module.exports = router;
