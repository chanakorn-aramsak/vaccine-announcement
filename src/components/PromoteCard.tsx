"use client";
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export function PromoteCard() {
  const [playing, setPlaying] = useState(true);

  useWindowListener("contextmenu", (e) => {
    e.preventDefault();
  });
  const handleVideoStateChange = (state: boolean) => {
    setPlaying(state);
  };
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center p-8">
      <div className="bg-white p-6 rounded-lg shadow-xl flex items-center space-x-10">
        <div className="border border-gray-300 p-6 rounded-lg">
          <VideoPlayer
            isPlaying={playing}
            vdoSrc="getvaccine.mp4"
            onStateChange={handleVideoStateChange}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="text-xl">Get your vaccine today.</div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
            onClick={() => setPlaying(!playing)}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
}
