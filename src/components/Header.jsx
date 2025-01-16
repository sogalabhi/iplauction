"use client";
import React from "react";

export function Header() {
  return (
    <header className="relative bg-gray-900 text-white py-6 px-4 sm:px-12 rounded-lg overflow-hidden">
      {/* Main Header: InCub8 IPL Auction */}
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-semibold font-poppins text-green-400 mb-2">
          InCub8
        </h1>
        <h2 className="text-2xl font-semibold font-poppins text-white">
          IPL Auction
        </h2>
      </div>

      {/* Sponsors Section */}
      <div className="mt-8 flex justify-center space-x-8 relative z-10">
        <img
          src="https://via.placeholder.com/100x50?text=Sponsor+1"
          alt="Sponsor 1"
          className="h-12"
        />
        <img
          src="https://via.placeholder.com/100x50?text=Sponsor+2"
          alt="Sponsor 2"
          className="h-12"
        />
        <img
          src="https://via.placeholder.com/100x50?text=Sponsor+3"
          alt="Sponsor 3"
          className="h-12"
        />
      </div>

      {/* Moving Border Animation */}
      <div className="absolute inset-0 border-4 border-transparent rounded-lg animate-borderGlow"></div>

      {/* Add keyframes using Tailwind's `@layer` */}
      <style>
        {`
          @keyframes borderGlow {
            0% {
              box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
            }
            25% {
              box-shadow: 0 0 15px rgba(0, 0, 255, 0.7);
            }
            50% {
              box-shadow: 0 0 20px rgba(255, 0, 255, 0.7);
            }
            75% {
              box-shadow: 0 0 15px rgba(0, 0, 255, 0.7);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 255, 0, 0.7);
            }
          }
          .animate-borderGlow {
            animation: borderGlow 5s infinite ease-in-out;
          }
        `}
      </style>
    </header>
  );
}
