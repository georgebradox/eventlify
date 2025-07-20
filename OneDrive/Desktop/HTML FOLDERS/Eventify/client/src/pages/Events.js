// src/pages/Events.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

function isHappeningSoon(dateStr) {
  const eventDate = new Date(dateStr);
  const now = new Date();
  const diff = (eventDate - now) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= 30;
}

const avatarImages = [
  '/images/avatar1.png',
  '/images/avatar2.png',
  '/images/avatar3.png',
];

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('http://localhost:5000/api/events');
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch events');
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleRSVP = async (eventId) => {
    setMessage('');
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('Please log in to RSVP.');
      return;
    }
    try {
      const res = await fetch(`http://localhost:5000/api/events/${eventId}/rsvp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'RSVP failed');
      setMessage('RSVP successful!');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-accent/10 py-12 px-4">
      <h1 className="text-4xl font-display font-bold text-primary mb-10 text-center drop-shadow-lg">Upcoming Events</h1>
      {loading && <div className="text-center text-gray-500">Loading events...</div>}
      {error && <div className="text-center text-red-500 mb-6">{error}</div>}
      {message && <div className="text-center mb-6 text-accent font-display">{message}</div>}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {events.map((event, idx) => (
          <motion.div key={event._id} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}>
            <EventCard
              image={avatarImages[idx % avatarImages.length]}
              title={event.title}
              date={event.date}
              description={event.description}
              onRSVP={() => handleRSVP(event._id)}
              soon={isHappeningSoon(event.date)}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Events;

