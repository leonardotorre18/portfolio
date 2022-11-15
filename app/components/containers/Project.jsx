import { motion } from 'framer-motion';
import React from 'react';
// import PropTypes from 'prop-types';
import { BsFillFileEarmarkCodeFill } from 'react-icons/bs';
import { AiOutlineFullscreen } from 'react-icons/ai';

function Item({ title }) {
  return (
    <span className="text-light">{title}</span>
  );
}

export default function Project({
  id,
  title,
  img,
  technologies,
  description,
  links,
}) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 1 }}
      className="p-3 max-w-7xl mx-auto"
    >
      <h3 className="text-light font-first text-4xl">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-2">
          <div className="flex flex-wrap gap-3">
            <h4 className="mr-2 text-gray-500 mb-4">Tecnologías:</h4>
            { technologies.map(({ name, key }) => <Item title={name} key={key} />) }
          </div>

          <div>
            <p className="text-gray-300">{description}</p>
            <div className="flex mt-4 p-2 gap-2">
              <button
                type="button"
                className="text-light flex gap-1 justify-center items-center bg-sky-500 rounded-md px-2 py-1"
                onClick={() => {
                  window.open(links.online);
                }}
              >
                Ver Online
                <AiOutlineFullscreen />
              </button>
              <button
                type="button"
                className="text-light flex gap-1 justify-center items-center  bg-slate-700 rounded-md px-2 py-1"
                onClick={() => {
                  window.open(links.code);
                }}
              >
                Ver Código
                <BsFillFileEarmarkCodeFill />
              </button>
            </div>
          </div>
        </div>
        <div className="p-10 max-w-md">
          <div
            className="w-full"
          >
            <img
              className="object-cover w-full transition-all duration-700"
              id="imagen"
              src={img[0]}
              alt="Logo Generico"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
