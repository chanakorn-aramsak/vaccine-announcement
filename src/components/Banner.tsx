import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative h-screen w-screen"> {/* Changed to 100vh and 100vw */}
      <Image 
        src="/banner.png"
        alt="cover"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <div className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold">
          GET YOURSELF PROTECTED<br/>WITH VACCINES
        </div>
        <div className="text-black text-lg md:text-xl lg:text-2xl font-medium mt-4">
          Book same day appointments for you and your kids
        </div>
      </div>
    </div>
  );
}

export default Banner;
