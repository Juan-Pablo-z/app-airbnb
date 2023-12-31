
import React, { useState } from 'react';
import { PiHeartDuotone } from "react-icons/pi";


export const HeartIcon = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div onClick={toggleLike} className={`cursor-pointer transition-colors duration-300 ${isLiked ? 'text-[#ff5a60]' : 'text-white'}`}>
      <PiHeartDuotone className='text-3xl' />
    </div>
  );
};


