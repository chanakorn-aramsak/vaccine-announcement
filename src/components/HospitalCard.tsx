import React from 'react';

interface HospitalCardProps {
  name: string;
  imageSrc: string;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ name, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-between max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-200 ease-in-out">
      <div className="relative w-full h-48">
        <img className="absolute w-full h-full object-cover" src={imageSrc} alt={name} />
      </div>
      <div className="flex flex-col items-start justify-between w-full p-4">
        <div className="font-semibold text-lg mb-2 text-black">{name}</div>
      </div>
      <div className="w-full p-4 flex justify-end">
      </div>
    </div>
  );
}

export default HospitalCard;
