import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ avatar, name, quote, company }) => (
  <motion.div
    className="bg-white/90 dark:bg-dark/90 rounded-2xl shadow-cool p-8 flex flex-col items-center text-center backdrop-blur-md border border-primary/10 hover:scale-105 transition-transform duration-300"
    whileHover={{ y: -8, boxShadow: '0 8px 40px 0 rgba(124, 58, 237, 0.18)' }}
  >
    <img src={avatar} alt={name} className="w-16 h-16 rounded-full mb-4 border-4 border-accent shadow" />
    <blockquote className="italic text-lg text-gray-700 dark:text-gray-200 mb-4 font-body">“{quote}”</blockquote>
    <div className="font-display text-primary font-bold text-lg">{name}</div>
    <div className="text-accent text-sm font-body">{company}</div>
  </motion.div>
);

export default TestimonialCard; 