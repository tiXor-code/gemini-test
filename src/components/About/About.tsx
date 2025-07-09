
'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl font-bold text-gray-200">About Me</h2>
      <p className="mt-4 text-lg text-gray-200 text-center">
        From clicking &quot;Start Game&quot; as a kid, my life has been a quest to craft memorable
        experiences through creativity, technology, and human connection. Driven by a passion for
        games, I earned a BSc in Computer Games Design & Development, shipping two titles to
        market, and leading dynamic teams to impactful outcomes.
        <br /><br />
        Alongside game design and production at EA Sports, EA, and Ubisoft, I&apos;ve immersed
        myself in various creative and technical adventures—mastering C#, Java, video editing, Figma,
        Photoshop, and web development. My curiosity expanded further into drones, API
        integrations, and AI automation with platforms like ChatGPT, Gemini, and n8n, continuously
        automating and innovating in my daily workflow.
        <br /><br />
        Motivated by challenges and inspired by mentors, I thrive on transforming obstacles into
        innovation, committed not only to personal growth but to empowering those around me.
      </p>
      <h3 className="text-3xl font-bold text-gray-200 mt-8">My Toolbox</h3>
      <ul className="mt-4 text-lg text-gray-200 list-disc list-inside">
        <li>Game Development: Unity, Unreal Engine, C#, Java</li>
        <li>Media & Design: Adobe Premiere, After Effects, CapCut, Photoshop, Figma</li>
        <li>Web & Automation: Web Development, API Integrations, n8n, ChatGPT, Gemini</li>
        <li>Aerial Tech: Drone Operation</li>
        <li>Leadership & Collaboration: Team Leadership, Cross-Functional Collaboration, Agile Project Management</li>
        <li>Problem-Solving & Adaptability: Creative Problem-Solving, Adaptability, Intrinsic Motivation Facilitation</li>
      </ul>
    </motion.div>
  );
};

export default About;
