import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How do I RSVP for an event?',
    answer: 'Simply click the RSVP button on any event card and fill out the form. You’ll receive a confirmation email right away.'
  },
  {
    question: 'Can I host my own event on Eventify?',
    answer: 'Yes! Contact us to get started hosting your own events and reach a wider audience.'
  },
  {
    question: 'Is Eventify free to use?',
    answer: 'You can RSVP to events for free. For premium features like priority access and SMS notifications, upgrade to Pro.'
  },
  {
    question: 'How do I get event reminders?',
    answer: 'Enable email or SMS notifications in your profile after registering or logging in.'
  }
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);
  return (
    <div>
      {faqs.map((faq, idx) => (
        <div key={idx} className="mb-2 border border-primary/20 rounded-lg bg-white/80 dark:bg-dark/80 overflow-hidden">
          <button
            className="w-full text-left px-6 py-4 font-display text-lg text-primary flex justify-between items-center focus:outline-none"
            onClick={() => toggle(idx)}
          >
            {faq.question}
            <span className="ml-4 text-accent text-2xl">{openIndex === idx ? '-' : '+'}</span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === idx && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 text-gray-700 dark:text-gray-200 font-body"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion; 