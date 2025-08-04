import React from 'react';

const FloatingDiv = ({ img, text1, text2 }) => {
  return (
    <div className="flex items-center justify-around bg-white shadow-md rounded-xl pr-7 h-[4.5rem]">
      <img src={img} alt="" className="transform scale-[0.4]" />
      <span className="font-sans text-base text-black leading-tight">
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;

