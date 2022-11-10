import React from 'react';
import projects from '../api/projects.json';
import Project from '../components/containers/Project';

export default function Projects() {
  return (
    <div
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
    </div>
  );
}
