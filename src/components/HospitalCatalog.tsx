"use client";
import { useState, useEffect } from "react";
import HospitalCard from "./HospitalCard";
import InteractionCard from "./InteractionCard";
import { Prompt } from "next/font/google";
import { IHospitalsResponse } from "@/interfaces/IHospitalsResponse";
import { IHospital } from "@/interfaces/IHospital";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-prompt",
});

const HospitalCatalog = async ({
  hospitalsResponse,
}: {
  hospitalsResponse: Promise<IHospitalsResponse>;
}) => {
  const [allReviews, dispatchReview] = useState(new Map());
  const [isRatingClicked, setIsRatingClicked] = useState(false);

  const hospitalData = (await hospitalsResponse).data;

  const handleRatingChange = (newRating: number, hospitalName: string) => {
    const newReviews = new Map(allReviews);
    newReviews.set(hospitalName, newRating);
    dispatchReview(newReviews);
    setIsRatingClicked(true);
  };

  const handleReviewRemove = (hospitalName: string) => {
    const newReviews = new Map(allReviews);
    newReviews.delete(hospitalName);
    dispatchReview(newReviews);
  };

  return (
    <div className="m-4">
      <div
        className={`${prompt.variable} font-sans text-center text-black text-lg md:text-xl lg:text-2xl font-bold mt-8`}
      >
        <h2>List of Hospitals participating in the project</h2>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        {hospitalData?.map((hospital, index) => (
          <div className="mt-4 w-72 h-96" key={index}>
            <InteractionCard
              serverComponent={
                <HospitalCard
                  hid={hospital.id}
                  name={hospital.name}
                  imageSrc={hospital.picture}
                  onRatingChange={(newRating) =>
                    newRating && handleRatingChange(newRating, hospital.name)
                  }
                />
              }
            />
          </div>
        ))}
      </div>
      {isRatingClicked && (
        <div className="flex justify-center mt-4">
          <div className="shadow-lg rounded-lg p-4 ">
            <h1 className="text-center text-3xl font-bold text-black">
              Review
            </h1>
            {Array.from(allReviews).map(([name, rating]) => (
              <div
                className="bg-blue-300 my-2 p-2 rounded"
                key={name}
                onClick={() => handleReviewRemove(name)}
              >
                <h1 className="text-center text-xl font-bold">
                  {name} : Rating = {rating}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HospitalCatalog;
