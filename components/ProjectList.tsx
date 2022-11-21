import React, {
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import ProjectItem from './ProjectItem';
import projects from '../assets/projects';

const LIMIT = 6;

export default function ProjectList() {
  const [page, setPage] = useState(1);
  return (
    <div className="flex flex-col justify-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 xl:grid-cols-3 xl:gap-12">
        {
          projects.map(({
            title,
            image,
            link,
            tags,
          }, i) => (
            <div key={title} className={i < LIMIT * page ? '' : 'hidden'}>
              <ProjectItem
                key={title}
                title={title}
                image={image}
                link={link}
                tags={tags}
              />
            </div>
          ))
        }
      </div>
      {
        page < projects.length / LIMIT && (
          <div className="flex justify-center mt-12">
            <button type="button" onClick={() => setPage(page + 1)} className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white rounded-xl ring-slate-400 hover:ring-1 bg-gradient-to-br from-indigo-700 to-indigo-500 hover:from-indigo-800 hover:to-indigo-500 active:from-indigo-900 active:to-indigo-500">
              <span className="mr-2">
                Load more
              </span>
              <FontAwesomeIcon icon={faArrowDown} className="w-3 text-white" />
            </button>
          </div>
        )
      }
    </div>
  );
}
