import { motion } from 'framer-motion';
import React from 'react';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import ImgPerfil from '../../assets/img/perfil.jpg';

export default function AboutMe() {
  const param1 = 'Soy Leonardo, trabajo como Programador Web independiente de forma remota. Comencé en el mundo de la programación hace más de un año. La constancia y la disciplina son mis principales cualidades, las cuales me han impulsado en el proceso de mejorar mis Habilidades.';
  const param2 = ' Me apasiona la programación, es por esto que nunca dejo de aprender. Aunque tengo todos los conocimientos para crear un sitio web desde cero, no deseo que mi crecimiento como profesional de detenga aquí. Mi perfil será uno que crezca de manera exponencial, para que mis conocimientos abarquen todo aspecto del desarrollo web y móvil.';

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:flex ">
          <div className="flex items-center justify-center w-full sm:w-1/2 md:w-1/3">
            <img
              className="w-full h-full object-cover"
              src={ImgPerfil}
              alt="Perfil Leonardo"
            />
          </div>
          <div className="text-white w-full sm:w-1/2 md:w-2/3 px-6 pt-6 pb-2">
            <p className="py-2 px-1">{param1}</p>
            <p className="py-2 px-1">{param2}</p>
            <div className="flex p-3 gap-5 text-2xl">
              <BsLinkedin
                onClick={() => window.open('https://www.linkedin.com/in/leonardo-torrealba/')}
                className="cursor-pointer"
              />
              <BsGithub
                onClick={() => window.open('https://github.com/leonardotorre18')}
                className="cursor-pointer"
              />
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="px-4">
          <button
            className="text-white bg-main "
            type="button"
          >
            Envíame un Email
          </button>
        </div>
      </motion.div>
    </div>
  );
}
