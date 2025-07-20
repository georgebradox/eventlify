const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

const imageMap = {
  'Women in Tech': '/images/WOMEN IN TECH.avif',
  'React Meetup': '/images/REACTMEETUP.png',
  'Tech Talk 2025': '/images/TECH TALK.webp',
  'Summer Music Fest': '/images/MUSIC FEST.webp',
  'Art & Creativity Expo': '/images/EXPO.webp',
  'Startup Pitch Night': '/images/PITCH NIGHT.webp',
  'Global Food Fair': '/images/FOOD FAIR.webp',
  'Charity Run for Hope': '/images/RUN.webp',
  'Open Air Film Night': '/images/FILM.webp',
};

async function revertImages() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const events = await Event.find();
    for (const event of events) {
      const originalImage = imageMap[event.title];
      if (originalImage) {
        event.image = originalImage;
        await event.save();
        console.log(`Reverted image for event: ${event.title}`);
      } else {
        console.log(`No image mapping found for event: ${event.title}`);
      }
    }
    console.log('Event images reverted!');
    process.exit();
  } catch (err) {
    console.error('Revert error:', err);
    process.exit(1);
  }
}

revertImages(); 