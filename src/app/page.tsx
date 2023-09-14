import Image from "next/image";
import { Prompt } from "next/font/google";
import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";
import Navbar from "@/components/Navbar";
const prompt = Prompt({ subsets: ["latin"], weight: "400", style: "normal", variable: "--font-prompt" });
export default function Home() {
  const hospitalData = [
    {
      name: "Chulalongkorn Hospital",
      imageSrc: "/CHULA-logo.png",
    },
    {
      name: "Rajavithi Hospital",
      imageSrc: "/RAJAVITHI-logo.png",
    },
    {
      name: "Thammasat University Hospital",
      imageSrc: "/THAMMASAT-logo.png",
    },
  ];
  return (
    <main className={`font-sans`}>
      <Navbar />
      <Banner />

      {/* Added centered text above the grid */}
      <div className={`${prompt.variable} font-sans text-center text-black text-lg md:text-xl lg:text-2xl font-bold mt-8`}>
        <h2>โรงพยาบาลที่เข้าร่วมโครงการ</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {hospitalData.map((hospital, index) => (
          <div className="mt-4" key={index}>
            <HospitalCard name={hospital.name} imageSrc={hospital.imageSrc} />
          </div>
        ))}
      </div>
    </main>
  );
}
