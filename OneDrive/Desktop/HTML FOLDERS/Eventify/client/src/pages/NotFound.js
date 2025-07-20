import React from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 py-12 px-4">
      <motion.div
        className="bg-white dark:bg-dark rounded-2xl shadow-cool p-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg width="120" height="120" fill="none" viewBox="0 0 120 120" className="mb-6">
          <circle cx="60" cy="60" r="56" stroke="#7c3aed" strokeWidth="8" fill="#fbbf24" />
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="48" fontFamily="Poppins, sans-serif" fill="#7c3aed">404</text>
        </svg>
        <h1 className="text-3xl font-display font-bold text-primary mb-4 text-center">Page Not Found</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center font-body">Sorry, the page you are looking for does not exist.</p>
        <Button variant="primary" size="md" onClick={() => window.location.href = '/'}>Go Home</Button>
      </motion.div>
    </div>
  );
}

export default NotFound;
