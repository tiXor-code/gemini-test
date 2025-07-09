
'use client';

import { motion } from 'framer-motion';
import Typed from 'typed.js';
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Creative Technologist', 'Game Producer', 'Software Engineer', 'UI/UX Designer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-5xl font-bold text-gray-200">Teodor-Cristian Luțoiu</h1>
      <h2 className="text-2xl text-gray-200">
        <span ref={el} />
      </h2>
    </motion.div>
  );
};

export default Hero;
