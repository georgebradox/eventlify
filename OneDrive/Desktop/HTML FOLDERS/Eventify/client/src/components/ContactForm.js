import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || 'Failed to send message');
      setStatus('Message sent! We will get back to you soon.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-4 bg-white/80 dark:bg-dark/80 p-8 rounded-2xl shadow-cool" onSubmit={handleSubmit}>
      {status && <div className={`mb-2 text-center font-display ${status.startsWith('Message sent') ? 'text-green-600' : 'text-red-500'}`}>{status}</div>}
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body bg-white dark:bg-dark"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body bg-white dark:bg-dark"
        required
      />
      <textarea
        placeholder="Your Message"
        rows={4}
        value={message}
        onChange={e => setMessage(e.target.value)}
        className="px-4 py-3 rounded-lg border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body bg-white dark:bg-dark"
        required
      />
      <Button variant="primary" size="lg" type="submit" className="w-full" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</Button>
    </form>
  );
};

export default ContactForm; 