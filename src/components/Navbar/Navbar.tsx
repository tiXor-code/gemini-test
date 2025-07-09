
'use client';

import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm py-4 px-8"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-white text-3xl font-extrabold tracking-wider">Teodor-Cristian Luțoiu</a>
        <ul className="flex space-x-8">
          <li><a href="#hero" className="text-white hover:text-blue-400 transition duration-300 text-lg font-medium">Home</a></li>
          <li><a href="#about" className="text-white hover:text-blue-400 transition duration-300 text-lg font-medium">About</a></li>
          <li><a href="#projects" className="text-white hover:text-blue-400 transition duration-300 text-lg font-medium">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-blue-400 transition duration-300 text-lg font-medium">Contact</a></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
