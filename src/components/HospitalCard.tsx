"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Rating } from "@mui/material";

interface HospitalCardProps {
  name: string;
  imageSrc: string;
  onRatingChange: (newRating: number | null) => void;
}

const HospitalCard: React.FC<HospitalCardProps> = ({
  name,
  imageSrc,
  onRatingChange,
}) => {
  const [value, setValue] = useState<number | null>(0);
  const setRating = (event: any, newValue: number | null) => {
    console.log("New Rating Value: ", newValue);
    onRatingChange(newValue); // Call the function passed as a prop
    setValue(newValue);
  };
  return (
    <div className="max-w-md w-[1/3] h-[300px] rounded-lg shadow-lg bg-white">
      <div className="relative w-full h-[70%] rounded-t-lg ">
        <Image
          className="object-cover rounded-t-lg"
          src={imageSrc}
          fill={true}
          alt={name}
          layout="fill"
        />
      </div>
      <div className="w-full h-[30%] font-bold text-xl mb-2 text-black text-center">
        {name}
      </div>
      <div className="w-full h-[30%] font-bold text-xl mb-2 text-black text-center">
        <Rating
          name="hospital-rating"
          value={value}
          onChange={setRating}
        />
      </div>
    </div>
  );
};

export default HospitalCard;
