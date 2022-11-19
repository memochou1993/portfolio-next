import React from 'react';
import Card from './Card';

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
