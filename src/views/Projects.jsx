import React from 'react';
import { motion } from 'framer-motion';
import projects from '../api/projects.json';
import Project from '../components/containers/Project';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: -1000 }}
      className="mt-8"
    >
      { projects.map(({
        id,
        title,
        img,
        technologies,
        description,
        links,
      }) => (
        <Project
          id={id}
          title={title}
          img={img}
          technologies={technologies}
          description={description}
          links={links}
        />
      )) }
    </motion.div>
  );
}
