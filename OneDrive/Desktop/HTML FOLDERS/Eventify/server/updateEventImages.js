const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

// Map event titles to image filenames (match titles exactly as in the database)
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

async function updateImages() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const events = await Event.find();
    for (const event of events) {
      const newImage = imageMap[event.title];
      if (newImage) {
        event.image = newImage;
        await event.save();
        console.log(`Updated image for event: ${event.title}`);
      } else {
        console.log(`No image mapping found for event: ${event.title}`);
      }
    }
    console.log('Event images updated!');
    process.exit();
  } catch (err) {
    console.error('Update error:', err);
    process.exit(1);
  }
}

updateImages(); 