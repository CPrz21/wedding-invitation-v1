'use client';

import { useEffect, useState } from 'react';

interface CountdownBoxProps {
  number: string | number;
  title: string;
}

export const CountdownBox = ({ number, title }: CountdownBoxProps) => {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);

  if (!client) {
    return null;
  }
  return (
    <li className='w-2/5 md:w-full bg-white p-4 border-gray-200 border-4 rounded-md z-20 text-center text-primary-color'>
      <p className='text-5xl'>{number}</p>
      <span className='text-sm'>{title}</span>
    </li>
  );
};
