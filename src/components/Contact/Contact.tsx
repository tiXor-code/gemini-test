
'use client';

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl font-bold text-gray-200">Contact Me</h2>
      <p className="mt-4 text-lg text-gray-200 text-center">
        Location: Bucharest, Romania
      </p>
      <p className="mt-2 text-lg text-gray-200 text-center">
        Phone: 0725697859
      </p>
      <p className="mt-2 text-lg text-gray-200 text-center">
        Email: <a href="mailto:tc.lutoiu@gmail.com" className="text-blue-400">tc.lutoiu@gmail.com</a>
      </p>
      <p className="mt-2 text-lg text-gray-200 text-center">
        Website: <a href="https://tixor-code.github.io" target="_blank" rel="noopener noreferrer" className="text-blue-400">tixor-code.github.io</a>
      </p>
      <p className="mt-2 text-lg text-gray-200 text-center">
        LinkedIn: <a href="https://www.linkedin.com/in/teodorlc" target="_blank" rel="noopener noreferrer" className="text-blue-400">linkedin.com/in/teodorlc</a>
      </p>
    </motion.div>
  );
};

export default Contact;
