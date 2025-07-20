const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

async function logEventImages() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const events = await Event.find();
    for (const event of events) {
      console.log(`Title: ${event.title} | Image: ${event.image}`);
    }
    process.exit();
  } catch (err) {
    console.error('Log error:', err);
    process.exit(1);
  }
}

logEventImages(); 