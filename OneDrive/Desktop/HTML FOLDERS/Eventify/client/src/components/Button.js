import React from 'react';

const Button = ({ children, variant = 'primary', size = 'md', ...props }) => {
  const base = 'font-display rounded shadow-cool transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-accent';
  const variants = {
    primary: 'bg-primary text-white hover:bg-accent',
    secondary: 'bg-secondary text-white hover:bg-primary',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-5 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
};

export default Button; 