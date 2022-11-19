import React from 'react';

export default function Footer() {
  return (
    <footer className="text-sm font-thin text-center dark:text-slate-300">
      {`© ${new Date().getFullYear()} Memo Chou`}
    </footer>
  );
}
