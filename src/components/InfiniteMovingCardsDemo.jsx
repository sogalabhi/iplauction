"use client";

import React from "react";

export function InfiniteMovingCardsDemo() {
  const purchasedPlayers = [
    {
  quote: "Virat Kohli",
  name: "Royal Challengers Bangalore",
  title: "₹15 Crore",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/849px-Virat_Kohli_portrait.jpg?20180427075657",
}
,
    {
      quote: "MS Dhoni",
      name: "Chennai Super Kings",
      title: "₹12 Crore",
      image: "", // Image link to be added later
    },
    {
      quote: "Rohit Sharma",
      name: "Mumbai Indians",
      title: "₹14 Crore",
      image: "", // Image link to be added later
    },
    {
      quote: "David Warner",
      name: "Delhi Capitals",
      title: "₹11 Crore",
      image: "", // Image link to be added later
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
      image: "", // Image link to be added later
    },
  ];

  return (
    <div className="w-full max-w-5xl bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl mb-8">
      {/* Purchased Players Subheading */}
      <h2 className="text-3xl font-bold text-white mb-6">Purchased Players</h2>

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div className="flex gap-8 animate-[scroll_20s_linear_infinite] flex-row-reverse">
            {purchasedPlayers.concat(purchasedPlayers).map((player, index) => (
              <div
                key={index}
                className="w-72 h-96 p-4 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-xl flex-shrink-0 border border-gray-700 relative"
              >
                <div className="w-full h-2/3 bg-gray-600 rounded-t-xl flex items-center justify-center">
                  <span className="text-white">Image Placeholder</span>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {player.quote}
                  </h3>
                  <p className="text-lg text-gray-300">Team: {player.name}</p>
                  <p className="text-lg text-green-400 font-semibold">
                    Amount: {player.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}




