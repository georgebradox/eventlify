import React from 'react';

const Footer = () => (
  <footer className="bg-primary text-white py-6 mt-12 shadow-cool">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <div className="mb-2 md:mb-0 font-display text-lg">© {new Date().getFullYear()} Eventify. All rights reserved.</div>
      <div className="flex space-x-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Twitter</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Instagram</a>
      </div>
    </div>
  </footer>
);

export default Footer; 