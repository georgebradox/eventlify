import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import TestimonialCard from './TestimonialCard';

const variants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0 })
};

const TestimonialCarousel = ({ testimonials }) => {
  const [[index, direction], setIndex] = useState([0, 0]);
  const paginate = (newDirection) => {
    setIndex(([prev, _]) => [
      (prev + newDirection + testimonials.length) % testimonials.length,
      newDirection
    ]);
  };
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full flex justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="w-full"
          >
            <TestimonialCard {...testimonials[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 mt-6">
        <button onClick={() => paginate(-1)} className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-cool hover:bg-accent transition"><span className="text-2xl">&#8592;</span></button>
        <button onClick={() => paginate(1)} className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-cool hover:bg-accent transition"><span className="text-2xl">&#8594;</span></button>
      </div>
    </div>
  );
};

export default TestimonialCarousel; 