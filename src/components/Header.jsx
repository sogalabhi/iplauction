"use client";
import React from "react";

export function Header() {
  return (
    <header className="relative bg-gray-900 text-white py-4 px-4 sm:px-8 rounded-lg overflow-hidden flex items-center justify-between">
      {/* Left Logo */}
      <div className="flex items-center">
        <img
          src="src/assets/incub8L.png"
          alt="Organization Logo"
          className="h-20 mr-7"
        />
      </div>

      {/* Main Header: E-Cell NITK */}
      <div className="text-center relative z-10 flex-grow">
        <h1 className="text-3xl font-semibold font-poppins text-green-400 mb-1">
          E-Cell NITK
        </h1>
        <h2 className="text-xl font-semibold font-poppins text-white">
          IPL Auction
        </h2>
      </div>

      {/* Right Logo */}
      <div className="flex items-center">
        <img
          src="src/assets/navLogo.png"
          alt="Right Logo"
          className="h-16 ml-2"
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
