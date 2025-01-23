"use client";
import React, { useEffect } from "react";
import Timer from "../components/Timer";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import { Header } from "../components/Header";

const TimerPage = () => {
  useEffect(() => {
    // Enable autoplay after user interaction
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
    }
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-evenly text-white overflow-hidden">
      {/* Background Music */}
      <audio id="background-audio" loop>
        <source
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element.
      </audio>

      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-orange-500 to-blue-600 animate-gradient">
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:30px_30px] opacity-40 animate-cross"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 w-full max-w-4xl p-4">
        <Header />
      </div>

      {/* Timer Section */}
      <div className="relative z-10 w p-4">
        <div className="p-3 rounded-lg border border-gray-700 shadow-lg backdrop-blur-m bg-white/10" >
          <Timer auctionEndTime="2025-02-20T18:30:00" />
        </div>
      </div>

      {/* Infinite Moving Cards Section */}
      <div className="relative z-10 w-full max-w-4xl p-4">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default TimerPage;
