import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Ha from "./Ha";
import StatsForHomePage from "../../components/StatsForHomePage";
import { Link } from 'react-router-dom';

const PlayerCard = ({ player, showHammer, currentBidder, currentBid, showPlayerCard, markAsUnSold, markAsSold, isMarkingSold, isMarkingUnsold }) => {
  const [isSold, setIsSold] = useState(false);
  const roleIcons = {
    "Batsmen": "🏏",
    "Bowler": "⚾",
    "All-rounder": "🏏⚾",
    "WK": "🧤",
  };
  useEffect(() => {
    setIsSold(false);
  }, [player]);
  function formatPriceInCrores(price) {
    // Price is already in crores - show as crores regardless of value
    return `${Number(price).toLocaleString('en-IN')} Crore`;
  }
  return (
    <div
      className={`flex flex-col items-center justify-center hover:scale-105 transition ${isSold ? "fixed inset-0 z-50 bg-black" : ""
        } transition-all duration-500 py-3`}
    >
      {/* Confetti */}
      {isSold && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className="relative flex justify-center items-center">
        <div className="absolute w-[30rem] h-[15rem] rounded-t-full bg-gradient-to-br from-[#00d4e1] to-purple-500 opacity-50 blur-lg animate-pulse"></div>

        <div
          className={`relative w-96 h-48 rounded-t-full overflow-visible shadow-xl`}
        >
          {isSold && (
            <div className="text-center text-5xl pt-2 relative z-10 heading-font" style={{ textShadow: "4px 4px 0px #4f829c" }}>
              Player Sold!
            </div>

          )}
          <img
            src={player.image}
            alt={player.player_name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-64"
          />
          {showHammer && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Ha className="w-2 h-2" />
            </div>
          )}
        </div>
      </div>
      <h2 className="text-xl font-bold mt-4 z-30">{player.player_name} {roleIcons[player.role]}</h2>

      <div className="flex gap-4 mt-2 py-5 justify-center items-center">
        <div className="border-slate-200 rounded-lg border-4 transform skew-x-12 px-4 py-2">
          <span className="inline-block transform -skew-x-12 ">
            Base Price: ₹{formatPriceInCrores(player.base_price)}
          </span>
        </div>

        <div className="border-slate-200 rounded-lg border-4 transform -skew-x-12 px-4 py-2">
          <span className="inline-block transform skew-x-12 ">
            {showPlayerCard == true ? 'Final Price' : 'Current Bid'}: ₹{formatPriceInCrores(currentBid)}
          </span>
        </div>
      </div>
      {currentBidder != null &&
        <h2 className={`text-xl font-bold animate-pulse mt-4 ${showPlayerCard == true ? 'text-green-500' : 'text-yellow-400'}`}> {showPlayerCard == true ? 'Sold to' : 'Current Bidder'}: {currentBidder}</h2>
      }
      <StatsForHomePage stats={player} />
      {
        (showPlayerCard != true && player) && (
          <div className={`text-center justify-center relative z-10`}>

            <button
              onClick={markAsUnSold}
              className=" bg-[#a86e1a] text-white px-4 py-2 rounded hover:bg-[#7a4a01] transition w-36 h-12 max-w-xs "
            >
              {isMarkingUnsold ? 'Processing...' : 'Mark as Unsold'}
            </button>
          </div>
        )
      }
    </div>
  );
};

export default PlayerCard;
