import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white/80 dark:bg-dark/80 rounded-2xl shadow-cool p-6 flex flex-col items-center text-center backdrop-blur-md hover:scale-105 transition-transform duration-300 border border-primary/10"
    whileHover={{ y: -8, boxShadow: '0 8px 40px 0 rgba(124, 58, 237, 0.18)' }}
  >
    <div className="mb-4 text-4xl">{icon}</div>
    <h3 className="font-display text-xl text-primary font-bold mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-200 font-body">{description}</p>
  </motion.div>
);

export default FeatureCard; 