"use client";
import React from "react";

export function Header() {
  return (
    <header className="bg-gray-900 text-white py-6 px-4 sm:px-12">
      {/* Main Header: InCub8 IPL Auction */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold font-poppins text-green-400 mb-2">
          InCub8
        </h1>
        <h2 className="text-2xl font-semibold font-poppins text-white">
          IPL Auction
        </h2>
      </div>

      {/* Sponsors Section */}
      <div className="mt-8 flex justify-center space-x-8">
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
    </header>
  );
}

