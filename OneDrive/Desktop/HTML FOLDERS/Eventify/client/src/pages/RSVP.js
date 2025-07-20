import React, { useState } from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';

function RSVP() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setSubmitted(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 py-12 px-4">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} recycle={false} />}
      <motion.div
        className="bg-white dark:bg-dark rounded-2xl shadow-cool p-10 w-full max-w-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-primary mb-6 text-center">RSVP for Event</h1>
        {submitted ? (
          <div className="text-center text-accent font-display text-xl">Thank you for your RSVP!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-4 py-2 rounded border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body"
              required
            />
            <Button variant="primary" size="lg" type="submit" className="w-full">Submit RSVP</Button>
          </form>
        )}
      </motion.div>
    </div>
  );
}

export default RSVP;
