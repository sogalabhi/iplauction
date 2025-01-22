import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Ha from "./Ha";
import StatsForHomePage from "../../components/StatsForHomePage";

const PlayerCard = ({ player, showHammer, currentBidder, currentBid }) => {
  const [isSold, setIsSold] = useState(false);

  useEffect(() => {
    setIsSold(false);
  }, [player]);
  function formatPriceInLakhs(price) {

    if (price >= 100) {
      // Convert to crore
      const crore = (price / 100).toFixed(2); // 2 decimal places
      return `${Number(crore).toLocaleString('en-IN')} Crore`;
    } else {
      // Keep it in lakh
      return `${Number(price).toLocaleString('en-IN')} Lakh`;
      // return price;
    }
  }
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
            src={player.player_image}
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

      <h2 className="text-xl font-bold mt-4">{player.name}</h2>

      <div className="flex gap-4 mt-2 py-5 justify-center items-center">
        <div className="border-slate-200 rounded-lg border-4 transform skew-x-12 px-4 py-2">
          <span className="inline-block transform -skew-x-12 ">
            Base Price: ₹{formatPriceInLakhs(player.base_price)}
          </span>
        </div>

        <div className="border border-slate-200 transform -skew-x-12 px-4 py-2">
          <span className="inline-block transform skew-x-12 ">
            {showHammer ? 'Current Bid' : 'Final Price'}: ₹{formatPriceInLakhs(currentBid)}
          </span>
        </div>
      </div>
      {currentBidder != null &&
        <h2 className="text-xl font-bold animate-pulse mt-4 text-red-500 "> {showHammer ? 'Current Bidder' : 'Bought By'}: {currentBidder}</h2>
      }

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
