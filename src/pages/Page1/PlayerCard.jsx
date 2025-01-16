import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Ha from "./Ha";

const PlayerCard = ({ player, showHammer }) => {
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    setIsSold(false);
  }, [player]);

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        isSold ? "fixed inset-0 z-50 bg-black" : ""
      } transition-all duration-500`}
    >
      {/* Confetti */}
      {isSold && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="relative flex justify-center items-center">
        <div className="absolute w-[30rem] h-[15rem] rounded-t-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg animate-pulse"></div>

        <div
          className={`relative w-96 h-48 rounded-t-full overflow-hidden shadow-xl`}
        >
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          {showHammer && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Ha className="w-2 h-2" />
            </div>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold text-sky-400 mt-4">{player.name}</h2>

      <div className="flex gap-4 mt-2 py-5 justify-center items-center">
        <div className="border border-slate-500 transform skew-x-12 px-4 py-2">
          <span className="inline-block transform -skew-x-12 text-sky-400">
            Base Price: ₹{player.basePrice.toLocaleString()}
          </span>
        </div>

        <div className="border border-slate-500 transform -skew-x-12 px-4 py-2">
          <span className="inline-block transform skew-x-12 text-sky-400">
            Current Bid: ₹{player.currentBid.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="bg-gray-800 p-2 rounded-lg text-white w-112 h-16 m-4">
        <div className="flex flex-row gap-7">
          <div className="flex flex-col justify-between">
            <span className="font-semibold">Matches:</span>
            <span>{player.matches}</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold">Wickets:</span>
            <span>{player.wickets}</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold">Economy:</span>
            <span>{player.economy}</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold">Strike Rate:</span>
            <span>{player.strikeRate}</span>
          </div>
          <div className="flex flex-col justify-between">
            <span className="font-semibold">Runs:</span>
            <span>{player.runs}</span>
          </div>
        </div>
      </div>

      {isSold && (
        <div className="absolute text-3xl font-bold text-green-600 top-10">
          🎉 Player Sold! 🎉
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
