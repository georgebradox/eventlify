import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Button from "../components/Button";
import FeatureCard from "../components/FeatureCard";
import TestimonialCarousel from "../components/TestimonialCarousel";
import FAQAccordion from "../components/FAQAccordion";

const features = [
  {
    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Easy RSVP",
    description: "RSVP to events in just a few clicks. No hassle, no confusion.",
  },
  {
    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0z"/><path d="M12 17v.01"/><path d="M12 21a9 9 0 100-18 9 9 0 000 18z"/></svg>,
    title: "Event Reminders",
    description: "Get timely reminders so you never miss an event again.",
  },
  {
    icon: <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M4 11h16"/></svg>,
    title: "Mobile Friendly",
    description: "Enjoy a seamless experience on any device, anywhere, anytime.",
  },
];

const testimonials = [
  {
    avatar: "/images/alex-kim.png",
    name: "Alex Kim",
    quote: "Eventify made organizing and attending events a breeze! The reminders are a lifesaver.",
    company: "Tech Innovators",
  },
  {
    avatar: "/images/maria-lopez.png",
    name: "Maria Lopez",
    quote: "I love the clean design and how easy it is to RSVP. My team uses it for every meetup.",
    company: "React Nairobi",
  },
  {
    avatar: "/images/james-smith.png",
    name: "James Smith",
    quote: "The best event platform I've used. Looks great on my phone, too!",
    company: "Women in Tech",
  },
];

const trustedBy = [
  "/images/REACTMEETUP.png",
  "/images/TECH TALK.webp",
  "/images/WOMEN IN TECH.avif",
];

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary via-pink-200 to-accent px-4 py-0 overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-accent opacity-30 rounded-full filter blur-2xl z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-primary opacity-20 rounded-full filter blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col md:flex-row items-center pt-32 pb-20 w-full gap-10 md:gap-20">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-6 text-center md:text-left drop-shadow-lg">
            The Easiest Way to <span className="text-accent">Host</span> & <span className="text-accent">Attend</span> Events
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-2xl text-center md:text-left font-body">
            Discover, RSVP, and never miss out on exciting events around you. Eventify brings people together with style and simplicity.
          </p>
          <Button variant="primary" size="lg" onClick={() => window.location.href = '/events'}>
            Get Started
          </Button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          {/* Custom SVG illustration */}
          <svg width="340" height="260" viewBox="0 0 340 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-72 h-56 md:w-[340px] md:h-[260px]">
            <ellipse cx="170" cy="220" rx="150" ry="30" fill="#fbbf24" fillOpacity="0.15" />
            <rect x="60" y="60" width="220" height="100" rx="20" fill="#7c3aed" fillOpacity="0.15" />
            <rect x="90" y="90" width="160" height="60" rx="15" fill="#7c3aed" fillOpacity="0.25" />
            <circle cx="120" cy="120" r="18" fill="#fbbf24" />
            <circle cx="220" cy="120" r="18" fill="#fbbf24" />
            <rect x="150" y="110" width="40" height="20" rx="8" fill="#fff" />
            <ellipse cx="170" cy="200" rx="60" ry="10" fill="#7c3aed" fillOpacity="0.10" />
            <text x="50%" y="60%" textAnchor="middle" fill="#7c3aed" fontSize="32" fontFamily="Poppins, sans-serif" dy=".3em">🎉</text>
          </svg>
        </div>
      </section>
      {/* Trusted By Section */}
      <section className="relative z-10 w-full flex flex-col items-center mb-16">
        <div className="uppercase text-sm text-gray-500 tracking-widest mb-4">Trusted by</div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {trustedBy.map((logo, idx) => (
            <img key={idx} src={logo} alt="Trusted logo" className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300" />
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Why Choose Eventify?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="relative z-10 w-full max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">What Our Users Say</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>
      {/* Pricing Section */}
      <section className="relative z-10 w-full max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <motion.div
            className="bg-white/80 dark:bg-dark/80 rounded-2xl shadow-cool p-8 flex flex-col items-center text-center backdrop-blur-md border border-primary/10 hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -8, boxShadow: '0 8px 40px 0 rgba(124, 58, 237, 0.18)' }}
          >
            <div className="font-display text-2xl text-primary font-bold mb-2">Free</div>
            <div className="text-4xl font-display font-bold text-accent mb-4">$0</div>
            <ul className="mb-6 text-gray-700 dark:text-gray-200 font-body space-y-2">
              <li>✔️ RSVP to unlimited events</li>
              <li>✔️ Email reminders</li>
              <li>✔️ Mobile friendly</li>
              <li>✔️ Community support</li>
            </ul>
            <Button variant="primary" size="md">Get Started</Button>
          </motion.div>
          {/* Pro Plan */}
          <motion.div
            className="bg-white/90 dark:bg-dark/90 rounded-2xl shadow-cool p-8 flex flex-col items-center text-center backdrop-blur-md border-2 border-accent hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -8, boxShadow: '0 8px 40px 0 rgba(251, 191, 36, 0.18)' }}
          >
            <div className="font-display text-2xl text-primary font-bold mb-2">Pro</div>
            <div className="text-4xl font-display font-bold text-accent mb-4">$9<span className="text-lg">/mo</span></div>
            <ul className="mb-6 text-gray-700 dark:text-gray-200 font-body space-y-2">
              <li>✔️ All Free features</li>
              <li>✔️ Priority event access</li>
              <li>✔️ SMS & push notifications</li>
              <li>✔️ Premium support</li>
            </ul>
            <Button variant="accent" size="md">Upgrade to Pro</Button>
          </motion.div>
        </div>
      </section>
      {/* Newsletter Signup Section */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-6 text-center">Stay in the Loop</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center font-body">Subscribe to our newsletter for event updates, tips, and exclusive offers.</p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:w-2/3 px-4 py-3 rounded-lg border border-primary/30 focus:border-accent focus:ring-2 focus:ring-accent outline-none font-body bg-white/80 dark:bg-dark/80"
            required
          />
          <Button variant="primary" size="lg" type="submit" className="w-full md:w-auto">Subscribe</Button>
        </form>
      </section>
      {/* FAQ Section */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQAccordion />
        </div>
      </section>
      {/* Contact Section */}
      <section className="relative z-10 w-full max-w-2xl mx-auto mb-24">
        <h2 className="text-3xl font-display font-bold text-primary mb-8 text-center">Contact Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 text-center font-body">Have a question, want to host an event, or need support? Reach out to us below!</p>
        <ContactForm />
      </section>
    </div>
  );
}

export default Home;
