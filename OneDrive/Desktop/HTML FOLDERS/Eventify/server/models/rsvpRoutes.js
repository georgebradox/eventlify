const express = require('express');
const router = express.Router();
const RSVP = require('../models/RSVP');
const Event = require('../models/Event');
const authenticate = require('../middleware/auth');

// POST: RSVP to an event
router.post('/events/:id/rsvp', authenticate, async (req, res) => {
  try {
    const existing = await RSVP.findOne({ user: req.user.id, event: req.params.id });
    if (existing) return res.status(400).json({ msg: 'You have already RSVP’d to this event.' });

    const rsvp = new RSVP({
      user: req.user.id,
      event: req.params.id,
    });

    await rsvp.save();
    res.status(201).json({ msg: 'RSVP successful!' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// GET: Fetch all RSVPs for current user
router.get('/rsvps', authenticate, async (req, res) => {
  try {
    const rsvps = await RSVP.find({ user: req.user.id }).populate('event');
    const formatted = rsvps.map((rsvp) => ({
      _id: rsvp.event._id,
      title: rsvp.event.title,
      description: rsvp.event.description,
      date: rsvp.event.date,
    }));
    res.json(formatted);
  } catch (err) {
    res.status(500).json({ msg: 'Failed to fetch RSVPs', error: err.message });
  }
});

module.exports = router;
