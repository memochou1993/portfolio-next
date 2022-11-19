import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

export default function Portfolio() {
  return (
    <div className="dark:bg-slate-900">
      <div className="container p-16 mx-auto sm:p-24 md:p-32">
        <div className="flex flex-col">
          <div className="flex justify-center mb-8">
            <Image alt="Memo Chou" src="/demo.jpeg" height="460" width="460" className="w-24 h-24 rounded-full sm:w-36 sm:h-36 md:w-48 md:h-48" />
          </div>
          <div className="flex justify-center mb-8">
            <span className="text-xs font-light tracking-tighter sm:tracking-tight md:tracking-normal sm:text-sm md:text-lg dark:text-slate-300">
              <a href="mailto:memochou1993@gmail.com">
                memochou1993@gmail.com
              </a>
              {' · '}
              Taipei, Taiwan
            </span>
          </div>
          <div className="flex justify-center mb-8">
            <a href="https://github.com/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} width="24" color="white" className="mx-2" />
            </a>
            <a href="https://www.linkedin.com/in/memochou1993/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} width="24" color="white" className="mx-2" />
            </a>
            <a href="https://linkedin.com/in/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} width="24" color="white" className="mx-2" />
            </a>
            <a href="https://www.instagram.com/memochou1993/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} width="24" color="white" className="mx-2" />
            </a>
            <a href="https://telegram.me/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} width="24" color="white" className="mx-2" />
            </a>
            <a href="https://twitter.com/memochou1993" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} width="24" color="white" className="mx-2" />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
