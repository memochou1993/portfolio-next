import React from 'react';
import Divider from './Divider';
import Heading from './Heading';

interface AboutProps {
  enabled: boolean;
  title: string;
}

export default function About({
  enabled,
  title,
}: AboutProps) {
  return enabled ? (
    <>
      <Divider anchor={title} />
      <Heading text={title} />
      <div className="text-center dark:text-slate-300">
        <p className="my-4">Hi there 🙋</p>
        <p className="my-4">
          I&apos;m Memo Chou, a creative developer passionate about Go, PHP, Rust and JavaScript.
        </p>
        <p className="my-4">
          Any questions, or want to get involved, please get in touch.
        </p>
        <p className="my-4">
          Thanks for visiting!
        </p>
      </div>
    </>
  ) : <template />;
}
