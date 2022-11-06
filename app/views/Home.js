import React from 'react';
import Jumbotron from '../components/layouts/Jumbotron';
import Background3D from '../components/layouts/Background3D';
import Carousel from '../components/containers/Carousel';
import SkillsList from '../components/layouts/SkillsList';

export default function Home() {
  return (
    <div>
      <Background3D />
      <Jumbotron />
      <SkillsList />
      <section>
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">Projects</h2>
        </div>
        <Carousel />
      </section>
      <section className="h-96">
        <div className="bg-gradient-to-r from-main to-transparent">
          <h2 className="font-first tracking-[-.2em] text-4xl max-w-7xl mx-auto px-4">About Me</h2>
        </div>
      </section>
    </div>
  );
}
