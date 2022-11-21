import React, {
  useState,
} from 'react';
import ProjectItem from './ProjectItem';
import projects from '../assets/projects';
import LoadMoreButton from './LoadMoreButton';

const LIMIT = 6;

export default function ProjectList() {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
        {
          projects.map(({
            title,
            image,
            link,
            tags,
          }, i) => (
            i < LIMIT * page && (
              <div key={title} className="flex justify-center">
                <ProjectItem
                  key={title}
                  title={title}
                  image={image}
                  link={link}
                  tags={tags}
                />
              </div>
            )
          ))
        }
      </div>
      {
        page < projects.length / LIMIT && (
          <div className="flex justify-center mt-12">
            <LoadMoreButton onClick={() => setPage(page + 1)} />
          </div>
        )
      }
    </>
  );
}
