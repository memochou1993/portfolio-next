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

const links = [
  {
    icon: faGithub,
    link: 'https://github.com/memochou1993',
  },
  {
    icon: faFacebook,
    link: 'https://www.facebook.com/memochou1993',
  },
  {
    icon: faLinkedin,
    link: 'https://linkedin.com/in/memochou1993',
  },
  {
    icon: faInstagram,
    link: 'https://www.instagram.com/memochou1993',
  },
  {
    icon: faTelegram,
    link: 'https://telegram.me/memochou1993',
  },
  {
    icon: faTwitter,
    link: 'https://twitter.com/memochou1993',
  },
];

export default function Profile() {
  return (
    <>
      <div className="flex justify-center mb-8 sm:mb-10 md:mb-12">
        <Image alt="Memo Chou" src="/avatar.jpg" height="1500" width="1500" className="w-32 h-32 rounded-full sm:w-36 sm:h-36 md:w-40 md:h-40" />
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col text-slate-800 dark:text-slate-200">
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
          <div className="flex items-center justify-between">
            {
              links.map(({ icon, link }) => (
                <a key={link} href={link} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={icon} className="w-6 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100" />
                </a>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
