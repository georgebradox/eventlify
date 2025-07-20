import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/90 dark:bg-dark/90 text-primary dark:text-white py-4 px-6 shadow-cool rounded-b-2xl sticky top-0 z-40 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/logo192.png" alt="Eventify Logo" className="h-10 w-10" />
          <h1 className="text-2xl font-display font-bold tracking-tight">Eventify</h1>
        </div>
        <div className="space-x-4 font-body text-lg">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <Link to="/events" className="hover:text-accent transition-colors">Events</Link>
          <Link to="/my-rsvps" className="hover:text-accent transition-colors">My RSVPs</Link>
          <Link to="/login" className="hover:text-accent transition-colors">Login</Link>
          <Link to="/register" className="hover:text-accent transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
