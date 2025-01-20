"use client";

import React, { useState } from "react";
import "tailwindcss/tailwind.css";

export function InfiniteMovingCardsDemo() {
  const purchasedPlayers = [
    {
      quote: "Virat Kohli",
      name: "Royal Challengers Bangalore",
      title: "₹15 Crore",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Virat_Kohli_portrait.jpg/849px-Virat_Kohli_portrait.jpg?20180427075657",
    },
    {
      quote: "MS Dhoni",
      name: "Chennai Super Kings",
      title: "₹12 Crore",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MS_Dhoni.jpg/800px-MS_Dhoni.jpg",
    },
    {
      quote: "Rohit Sharma",
      name: "Mumbai Indians",
      title: "₹14 Crore",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Rohit_Sharma.jpg",
    },
    {
      quote: "David Warner",
      name: "Delhi Capitals",
      title: "₹11 Crore",
      image: "https://crictoday.com/wp-content/uploads/2023/02/warner_player_of_the_tournamen_0_1200x768-1-1.jpg",
    },
    {
      quote: "Ben Stokes",
      name: "Chennai Super Kings",
      title: "₹16 Crore",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Ben_Stokes.jpg",
    },
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-6xl bg-gray-900 p-6 rounded-lg border border-gray-700 shadow-xl mb-8">
      {/* Purchased Players Subheading */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Purchased Players
      </h2>

      <div className="h-96 rounded-md flex items-center justify-center relative overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Infinite scroll container */}
          <div
            className={`flex gap-8 ${
              isHovered ? "pause" : "animate-[scroll_15s_linear_infinite]"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {purchasedPlayers.concat(purchasedPlayers).map((player, index) => (
              <div
                key={index}
                className="w-72 h-96 p-4 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-xl flex-shrink-0 border border-gray-700 relative transform transition-transform duration-300 hover:scale-110"
              >
                <div className="w-full h-2/3 bg-gray-600 rounded-t-xl overflow-hidden flex items-center justify-center">
                  <img
                    src={player.image}
                    alt={player.quote}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4 text-center flex flex-col justify-between h-1/3">
                  <h3 className="text-xl font-semibold text-white">
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

      {/* Custom Styles for Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .pause {
          animation-play-state: paused;
        }

        .animate-[scroll_15s_linear_infinite] {
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </div>
  );
}



