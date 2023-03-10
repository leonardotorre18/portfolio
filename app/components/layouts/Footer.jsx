import { motion } from 'framer-motion';
import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-dark text-center"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-center font-second text-main text-2xl font-bold">Leonardo Torrealba</h2>
        <div className="text-white flex flex-col my-4">
          <span className="font-bold text-lg">Leonardotorre14@gmail.com</span>
          <span>(+58) 412 - 5077183</span>
        </div>
        <div className="text-white flex text-2xl gap-3 justify-center my-4">
          <BsLinkedin />
          <BsGithub />
          {/* <BsInstagram /> */}
        </div>
        <p className="text-white">
          Hecho por
          <span className="font-semibold"> LeonardoTorre</span>
        </p>
      </div>
    </motion.div>
  );
}
