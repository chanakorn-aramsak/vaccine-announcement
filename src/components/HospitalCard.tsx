import React from "react";
import Image from "next/image";
interface HospitalCardProps {
  name: string;
  imageSrc: string;
}
const detail = "";
const HospitalCard: React.FC<HospitalCardProps> = ({ name, imageSrc }) => {
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

      
    </div>
  );
};

export default HospitalCard;
