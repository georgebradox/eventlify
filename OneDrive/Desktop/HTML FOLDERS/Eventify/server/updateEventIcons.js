const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

const imageMap = {
  'Tech Talk 2025': '/images/tech-icon.png',
  'Music Fest': '/images/music-icon.png',
  'Global Food Fair': '/images/food-icon.png',
  'Open Air Film Night': '/images/film-icon.png',
  'Art & Creativity Expo': '/images/art-icon.png',
  'Startup Pitch Night': '/images/startup-icon.png',
  'Charity Run for Hope': '/images/run-icon.png',
  'Women in Tech': '/images/art-icon.png', // using art icon for Women in Tech
  'React Meetup': '/images/react-icon.png',
  'Summer Music Fest': '/images/music-icon.png', // cover both 'Music Fest' and 'Summer Music Fest'
};

async function updateIcons() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const events = await Event.find();
    for (const event of events) {
      const newImage = imageMap[event.title];
      if (newImage) {
        event.image = newImage;
        await event.save();
        console.log(`Updated icon for event: ${event.title}`);
      } else {
        console.log(`No icon mapping found for event: ${event.title}`);
      }
    }
    console.log('Event icons updated!');
    process.exit();
  } catch (err) {
    console.error('Update error:', err);
    process.exit(1);
  }
}

updateIcons(); 