import Image from "next/image";

import Banner from "@/components/Banner";
import HospitalCard from "@/components/HospitalCard";
import Navbar from "@/components/Navbar";
import InteractionCard from "@/components/InteractionCard";
import CardPanel from "@/components/CardPanel";

export default function Home() {
  
  return (
    <main className={`font-sans`}>
      <Navbar />
      <Banner />
      <CardPanel />
      

      
    </main>
  );
}
