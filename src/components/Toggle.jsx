import React from 'react';
import { UilMoon, UilSun } from '@iconscout/react-unicons';

const Toggle = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-between w-14 h-7 p-1 bg-gray-200 rounded-full shadow-sm hover:bg-gray-300 transition"
      aria-label="Toggle theme"
    >
      <UilMoon className="w-4 h-4 text-gray-600" />
      <UilSun className="w-4 h-4 text-yellow-400" />
      <span
        className="absolute top-1/2 left-1 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow
          transition-all duration-300 ease-in-out"
      />
    </button>
  );
};

export default Toggle;

