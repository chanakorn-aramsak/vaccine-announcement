import Image from "next/image";
import { Inter, Prompt } from "next/font/google";
import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";
import Navbar from "@/components/Navbar";
import InteractionCard from "@/components/InteractionCard";
const prompt = Prompt({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-prompt",
});
export default function Home() {
  const hospitalData = [
    {
      name: "Chulalongkorn Hospital",
      imageSrc: "/chula.jpg",
    },
    {
      name: "Rajavithi Hospital",
      imageSrc: "/rajavithi.jpg",
    },
    {
      name: "Thammasat University Hospital",
      imageSrc: "/thammasat.jpg",
    },
  ];
  return (
    <main className={`font-sans`}>
      <Navbar />
      <Banner />

      {/* Added centered text above the grid */}
      <div
        className={`${prompt.variable} font-sans text-center text-black text-lg md:text-xl lg:text-2xl font-bold mt-8`}
      >
        <h2>List of Hospitals participating in the project</h2>
      </div>

      <div className="flex justify-center gap-4 mt-4">
        {hospitalData.map((hospital, index) => (
          <div className="mt-4 w-72 h-96" key={index}>
            <InteractionCard
              serverComponent={<HospitalCard name={hospital.name} imageSrc={hospital.imageSrc} />}
            />
            
          </div>
        ))}
      </div>
    </main>
  );
}
