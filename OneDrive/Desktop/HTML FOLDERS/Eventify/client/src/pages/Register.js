import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';
import Confetti from 'react-confetti';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setEventsLoading(true);
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        setEvents([]);
      } finally {
        setEventsLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Registration failed');
      localStorage.setItem('token', data.token);
      setShowConfetti(true);
      setTimeout(() => {
        window.location.href = '/events';
      }, 1800);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-white to-accent/10 py-12 px-4">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={250} recycle={false} />}
      <motion.div
        className="bg-white dark:bg-dark rounded-2xl shadow-cool p-10 w-full max-w-md mb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-display font-bold text-primary mb-2 text-center">Register</h1>
        {name && <div className="mb-4 text-lg text-accent text-center font-display">Welcome, {name}!</div>}
        {error && <div className="mb-4 text-red-500 text-center">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 rounded border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body"
            required
          />
          <Button variant="primary" size="lg" type="submit" className="w-full" disabled={loading}>{loading ? 'Registering...' : 'Register'}</Button>
        </form>
      </motion.div>
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Upcoming Events</h2>
        {eventsLoading ? (
          <div className="text-center text-gray-500">Loading events...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map(event => (
              <EventCard
                key={event._id || event.id}
                image={event.image}
                title={event.title}
                date={event.date}
                description={event.description}
                onRSVP={() => {}}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
