'use client'
import React, { useState } from "react";
import Image from "next/image";
const bannerImages = [
  "/banner1.png",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleImageClick = () => {
    setCurrentImageIndex((currentImageIndex) => (currentImageIndex + 1) % bannerImages.length);
  };

  return (
    <div className="relative h-screen w-screen" onClick={handleImageClick}>
      <Image
        src={bannerImages[currentImageIndex]}
        alt="cover"
        layout="fill"
        className="pointer-events-none"
      />
      <div
        className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center border-2 pointer-events-auto"
      >
        <div className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold">
          GET YOURSELF PROTECTED
          <br />
          WITH VACCINES
        </div>
        <div className="text-black text-lg md:text-xl lg:text-2xl font-medium mt-4">
          Book same day appointments for you and your kids
        </div>
      </div>
    </div>
  );
};

export default Banner;
