import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import imgencita from '../../assets/img/mockupynaaradesigns.png';

export default function Slider() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    // console.log(`Elemento ${number}:   `, isInView);
  }, [isInView]);

  return (
    <div className="h-96 w-full bg-dark bg-opacity-30 hover:bg-opacity-60 transition-colors px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 mx-auto w-full h-full max-w-7xl"
      >
        <div className="w-full flex justify-center items-center">
          <h4 className="text-light">YNaara Designs Store</h4>
        </div>
        <div className="h-full p-2 w-2/3 mx-auto">
          <motion.img
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="w-full h-full object-cover"
            src={imgencita}
            alt="Para mayor unformac"
          />
        </div>
      </motion.div>
    </div>
  );
}
