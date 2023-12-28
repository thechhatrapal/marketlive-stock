const express = require("express");
const router = express.Router();
const User = require('../Model/UserSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


router.post('/signup', async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
      const token = jwt.sign({ userId: newUser._id, email: newUser.email }, 'jsonwebtoken' ,{
        expiresIn: '1h', // Token expiration time
      });
      res.status(201).json({ message: 'User registered successfully', token });
    } catch (error) {
      console.error('SignUp Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/signin', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user with the email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Compare the provided password with the hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, {
      });
  
      res.status(200).json({ user : {token, user} });
    } catch (error) {
      console.error('SignIn Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.post('/verifyuser', async (req, res) => {
    try {
      const { email } = req.body;
  
      // Check if user with the email exists
      const user = await User.findOne({ email });
      if (user) {
        return res.status(200).json({ message: 'user is verified' });
      }
      else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('SignIn Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.put('/setNewPassword', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (user) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
        await user.save();
  
        return res.status(200).json({ message: 'Password was successfully changed' });
      } else {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Set New Password Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  module.exports = router;
