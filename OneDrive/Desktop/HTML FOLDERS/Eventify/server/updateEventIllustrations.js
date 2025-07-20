const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

const imageMap = {
  'Tech Talk 2025': '/images/tech-talk.svg',
  'Music Fest': '/images/music-fest.svg',
  'Global Food Fair': '/images/food-fair.svg',
  'Open Air Film Night': '/images/film-night.svg',
  'Art & Creativity Expo': '/images/art-expo.svg',
  'Startup Pitch Night': '/images/startup-pitch.svg',
  'Charity Run for Hope': '/images/charity-run.svg',
  'Women in Tech': '/images/women-in-tech.svg',
  'React Meetup': '/images/react-meetup.svg',
  'Summer Music Fest': '/images/music-fest.svg',
};

async function updateIllustrations() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const events = await Event.find();
    for (const event of events) {
      const newImage = imageMap[event.title];
      if (newImage) {
        event.image = newImage;
        await event.save();
        console.log(`Updated illustration for event: ${event.title}`);
      } else {
        console.log(`No illustration mapping found for event: ${event.title}`);
      }
    }
    console.log('Event illustrations updated!');
    process.exit();
  } catch (err) {
    console.error('Update error:', err);
    process.exit(1);
  }
}

updateIllustrations(); 