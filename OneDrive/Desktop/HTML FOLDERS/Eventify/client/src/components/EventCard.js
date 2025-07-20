import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const EventCard = ({ image, title, date, description, onRSVP, soon }) => (
  <motion.div
    className="bg-white dark:bg-dark rounded-xl shadow-cool overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto relative"
    whileHover={{ boxShadow: '0 8px 40px 0 rgba(124, 58, 237, 0.25)' }}
  >
    {soon && (
      <div className="absolute top-4 left-4 bg-accent text-white font-bold px-4 py-1 rounded-full shadow-cool text-xs z-10 animate-pulse">
        Happening Soon
      </div>
    )}
    <img src={image} alt={title} className="h-48 w-full object-cover" />
    <div className="p-5 flex flex-col flex-1">
      <h2 className="font-display text-2xl text-primary mb-2">{title}</h2>
      <div className="text-accent font-semibold mb-1">{date}</div>
      <p className="text-gray-700 dark:text-gray-200 flex-1 mb-4">{description}</p>
      <Button variant="primary" size="md" onClick={onRSVP}>RSVP</Button>
    </div>
  </motion.div>
);

export default EventCard; 