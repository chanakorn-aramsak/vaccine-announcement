"use client";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import CardPanel from "@/components/CardPanel";
import PromoteCard  from "@/components/PromoteCard";

export default function Home() {
  return (
    <main className={`font-sans`}>
      <Banner />
      <PromoteCard />
    </main>
  );
}
