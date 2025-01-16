import React, { useState } from "react";
import SponsorCarousel from "./SponsorCarousel";
import PlayerCard from "./PlayerCard";
import Confetti from "react-confetti";
import Ha from "./Ha";

const Page1 = () => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);

  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      image: "https://via.placeholder.com/150",
      basePrice: 2000000,
      currentBid: 5000000,
      matches: 30,
      wickets: 120,
      economy: 4.5,
      strikeRate: 130.2,
      runs: 1500,
    },
    {
      id: 2,
      name: "Rohit Sharma",
      image: "https://via.placeholder.com/150",
      basePrice: 2500000,
      currentBid: 5500000,
      matches: 35,
      wickets: 115,
      economy: 4.3,
      strikeRate: 135.5,
      runs: 1600,
    },
    {
      id: 3,
      name: "MS Dhoni",
      image: "https://via.placeholder.com/150",
      basePrice: 3000000,
      currentBid: 6000000,
      matches: 40,
      wickets: 110,
      economy: 4.2,
      strikeRate: 140.3,
      runs: 1800,
    },
  ];

  const markAsSold = () => {
    setShowHammer(true); // Show the hammer animation
    setTimeout(() => {
      setShowHammer(false); // Hide the hammer animation after it completes
      setShowPlayerCard(true); // Proceed with marking the player as sold
      setIsPlayerSold(true);
    }, 2000); // Adjust timeout to match the hammer animation duration
  };

  const nextPlayer = () => {
    // Move to the next player
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  return (
    <div className={`min-h-screen bg-black text-white`}>
      {!isPlayerSold && !showPlayerCard && (
        <div className="py-1">
          <h1 className="text-center text-4xl py-7">E-CELL NITK IPL AUCTION</h1>
          <h2 className="text-center text-2xl">Sponsored By</h2>
          <SponsorCarousel />
          <div className="relative flex justify-center items-center">
            <div className="relative">
              {/* Player Card */}
              <PlayerCard
                key={currentIndex}
                player={players[currentIndex]}
                onSold={setIsPlayerSold}
                showHammer={showHammer}
              />
              {/* Hammer Animation */}
            </div>
          </div>
        </div>
      )}

      {!isPlayerSold && !showPlayerCard && (
        <div className="text-center mt-8">
          <button
            onClick={markAsSold}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Mark as Sold
          </button>
        </div>
      )}

      {showPlayerCard && (
        <div className="flex flex-col items-center">
          {isPlayerSold && (
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          )}
          <h1 className="text-4xl py-8">🎉 Player Sold 🎉</h1>
          <PlayerCard
            key={currentIndex}
            player={players[currentIndex]}
            onSold={setIsPlayerSold}
          />
          <div className="text-center mt-4">
            <button
              onClick={nextPlayer}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next Player
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page1;
