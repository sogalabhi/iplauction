"use client";

import React from "react";

export function InfiniteMovingCardsDemo() {
  const purchasedPlayers = [
    {
      quote: "Virat Kohli",
      name: "Royal Challengers Bangalore",
      title: "₹15 Crore",
    },
    {
      quote: "MS Dhoni",
      name: "Chennai Super Kings",
      title: "₹12 Crore",
    },
    {
      quote: "Rohit Sharma",
      name: "Mumbai Indians",
      title: "₹14 Crore",
    },
    {
      quote: "David Warner",
      name: "Delhi Capitals",
      title: "₹11 Crore",
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
    },
  ];

  return (
    <div className="w-full max-w-5xl bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg mb-8">
      {/* Purchased Players Subheading */}
      <h2 className="text-2xl font-semibold text-white mb-4">Purchased Players</h2>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex gap-6 animate-[scroll_15s_linear_infinite] flex-row-reverse">
            {purchasedPlayers.concat(purchasedPlayers).map((player, index) => (
              <div
                key={index}
                className="w-64 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex-shrink-0"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {player.quote}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  Team: {player.name}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400">
                  Amount: {player.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


