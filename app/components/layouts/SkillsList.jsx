import { motion } from 'framer-motion';
import React from 'react';

const skills = [
  { id: 1, text: 'HTML, CSS' },
  { id: 2, text: 'JavaScript' },
  { id: 3, text: 'React' },
  { id: 4, text: 'Redux' },
  { id: 5, text: 'TailwindCSS' },
  { id: 6, text: 'NodeJS' },
  { id: 7, text: 'Responsive Design' },
  { id: 8, text: 'PWAs' },
  { id: 9, text: 'Webpack' },
  { id: 10, text: 'Eslint' },
];

function Item({ title = 'React' }) {
  return (
    <div
      className="bg-dark py-1 px-3 rounded-full shadow shadow-main hover:bg-light transition-colors cursor-default"
    >
      <div className="">
        <span className="text-light hover:text-dark">{title}</span>
      </div>
    </div>
  );
}

export default function SkillsList() {
  return (
    <div className="bg-dark bg-opacity-70 px-6 pb-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="flex gap-4 flex-wrap-reverse"
      >
        { skills.map((skill) => <Item title={skill.text} key={skill.id} />) }
      </motion.div>
    </div>
  );
}
