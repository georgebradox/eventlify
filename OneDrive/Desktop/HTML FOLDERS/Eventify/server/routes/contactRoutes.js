const express = require('express');
const ContactMessage = require('../models/ContactMessage');
const router = express.Router();

// POST /api/contact
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'All fields are required.' });
    }
    const contact = new ContactMessage({ name, email, message });
    await contact.save();
    res.status(201).json({ msg: 'Message received!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

module.exports = router; 