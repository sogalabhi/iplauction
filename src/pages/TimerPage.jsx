"use client";
import React, { useEffect } from "react";
import Timer from "../components/Timer";
import { InfiniteMovingCardsDemo } from "../components/InfiniteMovingCardsDemo";
import { Header } from "../components/Header";
import { useNavigate } from "react-router-dom";


const TimerPage = () => {
  useEffect(() => {
    // Enable autoplay after user interaction
    const audio = document.getElementById("background-audio");
    if (audio) {
      audio.play();
    }
  }, []);

  const navigate = useNavigate();


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

      {/* Main Content Section */}
      <div className="relative z-10 flex flex-row w-full max-w-6xl p-4 items-center justify-center">
        {/* Timer Section */}
        <div className="p-3 rounded-lg border border-gray-700 shadow-lg backdrop-blur bg-white/10 w">
          <Timer auctionEndTime="2025-02-20T18:30:00" />
        </div>
      </div>

      {/* Infinite Moving Cards Section */}
      <div className="relative z-10 w-full max-w-4xl p-4">
        <InfiniteMovingCardsDemo />
      </div>

      <button
        onClick={() => navigate("/")} 
        className="absolute bottom-8 right-8 z-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 22V12h6v10"
          />
        </svg>
      </button>

      {/* Custom Styles */}
      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default TimerPage;

