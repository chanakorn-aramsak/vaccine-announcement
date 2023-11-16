// Banner.tsx or Banner.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const bannerImages = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();
  const { data: session } = useSession();

  const handleImageClick = () => {
    setCurrentImageIndex(
      (currentImageIndex) => (currentImageIndex + 1) % bannerImages.length
    );
  };

  const handleButtonClick = () => {
    router.push("/hospital");
  };

  return (
    <div className="relative h-screen w-screen" onClick={handleImageClick}>
      <Image
        src={bannerImages[currentImageIndex]}
        alt="cover"
        layout="fill"
        className="pointer-events-none"
      />
      {session ? (
        <div className="z-30 absolute top-20 right-10 text-xl bg-blue-200 m-4 p-4">
          Hello, {session.user?.name}
        </div>
      ) : null}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-auto">
        <div className="text-black text-3xl md:text-5xl lg:text-6xl font-semibold">
          GET YOURSELF PROTECTED
          <br />
          WITH VACCINES
        </div>
        <div className="text-black text-lg md:text-xl lg:text-2xl font-medium mt-4">
          Book same day appointments for you and your kids
        </div>
      </div>
      <button
        id="navigate-hospital-button"
        className="absolute bottom-4 right-4 p-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleButtonClick}
      >
        Go to Hospitals
      </button>
    </div>
  );
};

export default Banner;
