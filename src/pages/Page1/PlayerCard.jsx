import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
//import Ha from "./Ha";
import StatsForHomePage from "../../components/StatsForHomePage";

const PlayerCard = ({ player, showHammer }) => {
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    setIsSold(false);
  }, [player]);

  return (
    <div
      className={`flex flex-col items-center justify-center ${isSold ? "fixed inset-0 z-50 bg-black" : ""
        } transition-all duration-500 py-3`}
    >
      {/* Confetti */}
      {isSold && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="relative flex justify-center items-center">
        <div className="absolute w-[30rem] h-[15rem] rounded-t-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg animate-pulse"></div>
        <div
          className={`relative w-96 h-48 rounded-t-full overflow-visible shadow-xl`}
        >
          <img
            src={player.image}
            alt={player.name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-64"
          />
          {showHammer && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Ha className="w-2 h-2" />
            </div>
          )}
        </div>
      </div>

      <h2 className="text-xl font-bold  mt-4">{player.name}</h2>

      <div className="flex gap-4 mt-2 py-5 justify-center items-center">
        <div className="border border-slate-200 transform skew-x-12 px-4 py-2">
          <span className="inline-block transform -skew-x-12 ">
            Base Price: ₹{player.basePrice.toLocaleString()}
          </span>
        </div>

        <div className="border border-slate-200 transform -skew-x-12 px-4 py-2">
          <span className="inline-block transform skew-x-12 ">
            Current Bid: ₹{player.currentBid.toLocaleString()}
          </span>
        </div>
      </div>

      <StatsForHomePage stats={player} />

      {isSold && (
        <div className="absolute text-3xl font-bold text-green-600 top-10">
          🎉 Player Sold! 🎉
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
