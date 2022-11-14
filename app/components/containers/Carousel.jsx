import React from 'react';
import OwlCarousel from 'react-owl-carousel3';
import Slider from './Slider';
import projects from '../../api/projects.json';

export default function Carousel() {
  return (
    <div className="max-w-7xl mx-auto">
      <OwlCarousel
        items={1}
        loop
        nav
        navClass={[
          'text-white absolute top-0 left-0 bg-gradient-to-r from-dark to-transparent h-full p-2 flex items-center text-2xl hover:to-dark hover:text-4xl hover:px-5 cursor-default transition-all font-bold',
          'text-white absolute top-0 right-0 bg-gradient-to-l from-dark to-transparent h-full p-2 flex items-center text-2xl hover:to-dark hover:text-4xl hover:px-5 cursor-default transition-all font-bold',
        ]}
        navText={[
          '<',
          '>',
        ]}
      >
        { projects.map(({ id, title, img }) => <Slider id={id} title={title} img={img[1]} />) }
      </OwlCarousel>
    </div>
  );
}
