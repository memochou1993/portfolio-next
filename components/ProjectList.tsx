import React from 'react';
import Card from './Card';
import projects from '../assets/projects';

export default function ProjectList() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-12">
        {
          projects.map(({
            title,
            image,
            link,
            tags,
          }) => (
            <Card
              key={title}
              title={title}
              image={image}
              link={link}
              tags={tags}
            />
          ))
        }
      </div>
    </div>
  );
}
