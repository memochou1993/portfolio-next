import React from 'react';

interface Props {
  text: string;
}

export default function Heading({
  text,
}: Props) {
  return (
    <div className="my-8 text-xl font-bold tracking-wider text-center dark:text-slate-300 sm:text-2xl md:text-4xl sm:my-12 md:my-16">
      {text}
    </div>
  );
}
