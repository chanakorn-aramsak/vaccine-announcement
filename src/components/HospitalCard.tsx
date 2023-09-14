'use client'
import React, {useState} from "react";
import Image from "next/image";
import { Rating } from "@mui/material";

interface HospitalCardProps {
  name: string;
  imageSrc: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, imageSrc }) => {
  const [value, setValue] = useState<number | null>(0);
  return (
    <div className="max-w-md w-[1/3] h-[300px] rounded-lg shadow-lg bg-white">
      <div className="relative w-full h-[70%] rounded-t-lg ">
        <Image
          className="object-cover rounded-t-lg"
          src={imageSrc}
          fill={true}
          alt={name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="w-full h-[30%] font-bold text-xl mb-2 text-black text-center">
        {name}
      </div>
      <div className="w-full h-[30%] font-bold text-xl mb-2 text-black text-center">
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </div>
    </div>
  );
};

export default HospitalCard;
