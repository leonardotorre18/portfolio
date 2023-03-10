import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import img from '../../assets/img/leonardo_torrealba.png';
import SkillsList from './SkillsList';
import writeTextAnimation from '../../utils/writeTextAnimation';

export default function Jumbotron() {
  useEffect(() => {
    const words = [
      'Hello World!',
      'Web Developer',
      'FrontEnd Developer',
    ];
    writeTextAnimation(words, 'text');
  }, []);

  return (
    <div className="bg-dark bg-opacity-70 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center px-8 max-w-7xl mx-auto">
        <div className="w-full max-h-96">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="object-cover h-full mx-auto"
            src={img}
            alt="Leonardo Torrealba"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="w-full flex flex-col justify-center items-center py-8 md:row-start-1"
        >
          <h1 className="text-main font-second text-4xl font-bold text-center">Leonardo Torrealba</h1>
          <div className="text-light font-[consolas] text-lg">
            <span id="text" />
            <span id="cursor">_</span>
          </div>
          <div className="mt-6">
            <a
              href="/assets/pdf/CV_Leonardo.pdf"
              download="CV_Leonardo.pdf"
              className="bg-light text-dark px-4 py-1 rounded hover:bg-dark hover:text-light transition-colors flex justify-center gap-3 items-center"
            >
              Descargar Resume
              <FiDownload />
            </a>
          </div>
        </motion.div>
      </div>
      <SkillsList />
    </div>
  );
}
