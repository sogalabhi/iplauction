"use client";
import React, { useEffect } from "react";
import Timer from "./components/Timer";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { Header } from "./components/Header";

const App = () => {
  useEffect(() => {
    // Enable autoplay after user interaction
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
    }
  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
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

      {/* Main Content */}
      <div className="relative z-10 w-full h-full max-w-5xl backdrop-blur-lg bg-white/10 p-6 rounded-lg border border-gray-700 shadow-lg flex flex-col justify-between">
        {/* Header */}
        <div className="flex-grow">
          <Header />
        </div>

        {/* Timer Section */}
        <div className="flex-grow mt-8 p-6 rounded-lg border border-gray-700 shadow-lg backdrop-blur-lg bg-white/10">
          <Timer auctionEndTime="2025-02-20T18:30:00" />
        </div>

        {/* Infinite Moving Cards Section */}
        <div className="flex-grow mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg">
          <InfiniteMovingCardsDemo />
        </div>
      </div>

      {/* Add keyframes using Tailwind's @layer */}
      <style>
        {
          `
          @tailwind base;
          @tailwind components;
          @tailwind utilities;

          @layer utilities {
            @keyframes gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            @keyframes cross {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(-20%, -20%);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            .animate-gradient {
              animation: gradient 10s ease infinite;
              background-size: 400% 400%;
            }

            .animate-cross {
              animation: cross 20s linear infinite;
            }
          }
          `
        }
      </style>
    </div>
  );
};

export default App;







