const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Event = require('./models/Event');

dotenv.config();

const events = [
  {
    title: 'Tech Talk 2025',
    description: 'Join us for an inspiring tech talk with industry leaders and networking opportunities.',
    date: '2025-08-05',
    image: '/images/TECH TALK.webp',
  },
  {
    title: 'React Meetup',
    description: 'A meetup for React enthusiasts to share, learn, and connect.',
    date: '2025-08-15',
    image: '/images/REACTMEETUP.png',
  },
  {
    title: 'Women in Tech',
    description: 'Celebrating women in technology with talks, panels, and workshops.',
    date: '2025-09-10',
    image: '/images/WOMEN IN TECH.avif',
  },
  {
    title: 'Summer Music Fest',
    description: 'Experience live music, food trucks, and fun activities for all ages at the city park!',
    date: '2025-09-20',
    image: '/images/MUSIC FEST.webp',
  },
  {
    title: 'Art & Creativity Expo',
    description: 'Explore stunning artworks and meet local artists at this creative showcase.',
    date: '2025-10-05',
    image: '/images/EXPO.webp',
  },
  {
    title: 'Startup Pitch Night',
    description: 'Watch startups pitch their ideas to investors and network with entrepreneurs.',
    date: '2025-10-18',
    image: '/images/PITCH NIGHT.webp',
  },
  {
    title: 'Global Food Fair',
    description: 'Taste dishes from around the world and enjoy cultural performances.',
    date: '2025-11-02',
    image: '/images/FOOD FAIR.webp',
  },
  {
    title: 'Charity Run for Hope',
    description: 'Run, walk, or cheer for a good cause and help raise funds for local charities.',
    date: '2025-11-15',
    image: '/images/RUN.webp',
  },
  {
    title: 'Open Air Film Night',
    description: 'Enjoy classic and indie films under the stars with friends and family.',
    date: '2025-12-01',
    image: '/images/FILM.webp',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Event.deleteMany({});
    await Event.insertMany(events);
    console.log('Database seeded with events!');
    process.exit();
  } catch (err) {
    console.error('Seeding error:', err);
    process.exit(1);
  }
}

seed(); 