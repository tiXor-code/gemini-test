
'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Game Producer - Play For Democracy - Arden',
    description: 'Transitioned from Game Designer to Producer, successfully managing project milestones and launch. Streamlined development processes through Agile methodologies, achieving a 30% reduction in project timelines. Represented the project publicly, meeting all stakeholder KPIs and enhancing market visibility.',
    image: '/placeholder-game.jpg',
  },
  {
    title: 'Assistant Content Producer - Electronic Arts Sports - EA FC 25 - Ultimate Team',
    description: 'Developed and executed content strategies, significantly enhancing player engagement and retention. Facilitated seamless cross-functional collaboration, optimizing live service updates and content releases. Utilized data-driven insights to boost player satisfaction and key performance metrics.',
    image: '/placeholder-ea.jpg',
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="text-4xl font-bold text-gray-200">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
