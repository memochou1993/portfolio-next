import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Profile() {
  return (
    <>
      <div className="flex justify-center">
        <Image alt="Memo Chou" src="/demo.jpeg" height="460" width="460" className="w-24 h-24 rounded-full sm:w-36 sm:h-36 md:w-48 md:h-48" />
      </div>
      <div className="flex justify-center my-8">
        <span className="text-xs font-light tracking-tighter sm:text-sm sm:tracking-tight md:text-lg md:tracking-normal dark:text-slate-200">
          <a href="mailto:memochou1993@gmail.com">
            memochou1993@gmail.com
          </a>
          {' · '}
          Taipei, Taiwan
        </span>
      </div>
      <div className="flex justify-center">
        <a href="https://github.com/memochou1993" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} width="24" className="mx-2 dark:text-slate-300" />
        </a>
        <a href="https://www.linkedin.com/in/memochou1993/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebook} width="24" className="mx-2 dark:text-slate-300" />
        </a>
        <a href="https://linkedin.com/in/memochou1993" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} width="24" className="mx-2 dark:text-slate-300" />
        </a>
        <a href="https://www.instagram.com/memochou1993/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} width="24" className="mx-2 dark:text-slate-300" />
        </a>
        <a href="https://telegram.me/memochou1993" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTelegram} width="24" className="mx-2 dark:text-slate-300" />
        </a>
        <a href="https://twitter.com/memochou1993" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} width="24" className="mx-2 dark:text-slate-300" />
        </a>
      </div>
    </>
  );
}
