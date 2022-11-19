import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

// TODO
// const links = [

// ];

export default function Profile() {
  return (
    <>
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <Image alt="Memo Chou" src="/avatar.jpeg" height="460" width="460" className="w-32 h-32 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col dark:text-slate-200">
          <div className="text-4xl font-bold tracking-wider">
            Memo Chou
          </div>
          <div className="flex flex-col my-4">
            <div className="inline-flex text-sm">
              <FontAwesomeIcon icon={faBuilding} className="w-3 mx-2" />
              KKLab
            </div>
            <div className="inline-flex text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="w-3 mx-2" />
              <a href="mailto:memochou1993@gmail.com">
                memochou1993@gmail.com
              </a>
            </div>
            <div className="inline-flex text-sm">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="w-3 mx-2" />
              Taipei, Taiwan
            </div>
          </div>
          <div className="flex justify-between">
            <a href="https://github.com/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
            <a href="https://www.linkedin.com/in/memochou1993/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
            <a href="https://linkedin.com/in/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
            <a href="https://www.instagram.com/memochou1993/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
            <a href="https://telegram.me/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
            <a href="https://twitter.com/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="w-6 dark:text-slate-300 dark:hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
