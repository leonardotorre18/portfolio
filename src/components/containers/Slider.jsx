import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router';

export default function Slider({ id, title, img }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const history = useNavigate();

  useEffect(() => {
    // console.log(`Elemento ${number}:   `, isInView);
  }, [isInView]);

  return (
    <div
      key={id}
      className="group h-96 w-full bg-dark bg-opacity-30 hover:bg-opacity-60 transition-colors px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-auto w-full h-full max-w-7xl"
        onClick={() => history('projects')}
      >
        <div className="w-full flex justify-center items-center px-4 py-2 sm:ml-20">
          <h4 className="text-light font-first text-4xl sm:group-hover:scale-105 sm:group-hover:translate-x-5 transition-transform duration-500">
            {title}
          </h4>
        </div>
        <div className="h-full p-2 w-2/3 mx-auto sm:group-hover:scale-105 sm:group-hover:-translate-x-5 transition-transform duration-500">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-full h-full object-cover"
            src={img}
            alt="Para mayor unformac"
          />
        </div>
      </motion.div>
    </div>
  );
}
