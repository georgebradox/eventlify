import React, { useEffect, useState } from 'react';
import Button from '../components/Button';

function MyRSVPs() {
  const [rsvps, setRsvps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRsvps = async () => {
      setLoading(true);
      setError('');
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to view your RSVPs.');
        setLoading(false);
        return;
      }
      try {
        const res = await fetch('http://localhost:5000/api/rsvps', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.msg || 'Failed to fetch RSVPs');
        setRsvps(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRsvps();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-accent/10 py-12 px-4">
      <h1 className="text-4xl font-display font-bold text-primary mb-10 text-center drop-shadow-lg">My RSVPs</h1>
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {error && <div className="text-center text-red-500 mb-6">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {rsvps.map(rsvp => (
          <div key={rsvp._id} className="bg-white dark:bg-dark rounded-xl shadow-cool p-6 flex flex-col items-start">
            <div className="font-display text-2xl text-primary mb-2">{rsvp.title}</div>
            <div className="text-accent font-semibold mb-1">{rsvp.date}</div>
            <div className="mb-4 font-body text-gray-700 dark:text-gray-200">{rsvp.description}</div>
            <Button variant="outline" size="md">View Details</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyRSVPs;
