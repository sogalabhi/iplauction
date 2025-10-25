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

  // Team logos mapping
  const teamLogos = {
    "Mumbai Indians": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Mumbai_Indians_Logo.svg/1200px-Mumbai_Indians_Logo.svg.png",
    "Chennai Super Kings": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png",
    "Royal Challengers Bengaluru": "https://1000logos.net/wp-content/uploads/2024/03/Royal-Challengers-Bengaluru-Logo.png",
    "Kolkata Knight Riders": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Kolkata_Knight_Riders_Logo.svg/778px-Kolkata_Knight_Riders_Logo.svg.png",
    "Rajasthan Royals": "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
    "Sunrisers Hyderabad": "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Sunrisers_Hyderabad_Logo.svg/1200px-Sunrisers_Hyderabad_Logo.svg.png",
    "Delhi Capitals": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Delhi_Capitals.svg/1200px-Delhi_Capitals.svg.png",
    "Punjab Kings": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Punjab_Kings_Logo.svg/935px-Punjab_Kings_Logo.svg.png",
    "Gujarat Titans": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Gujarat_Titans_Logo.svg/1200px-Gujarat_Titans_Logo.svg.png",
    "Lucknow Super Giants": "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Lucknow_Super_Giants_IPL_Logo.svg/1200px-Lucknow_Super_Giants_IPL_Logo.svg.png"
  };

  useEffect(() => {
    setIsSold(false);
  }, [player]);

  function formatPriceInCrores(price) {
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
        <div
          className={`relative w-96 h-48 rounded-t-full overflow-visible shadow-2xl border-2 border-white/20 backdrop-blur-sm`}
        >
          {isSold && (
            <div className="text-center text-5xl pt-2 relative z-10 heading-font bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
              Player Sold!
            </div>
          )}

          <img
            src={player.image}
            alt={player.player_name}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-64 drop-shadow-2xl"
          />

          {/* Team Logo with enhanced styling */}
          {player.team && teamLogos[player.team] && (
            <div className="absolute top-4 right-4 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-sm opacity-75 animate-pulse"></div>
                <img
                  src={teamLogos[player.team]}
                  alt={player.team}
                  className="relative w-14 h-14 rounded-full border-2 border-white/80 shadow-xl bg-white p-1"
                />
              </div>
            </div>
          )}

          {showHammer && (
            <div className="absolute inset-0 flex justify-center items-center">
              <Ha className="w-2 h-2" />
            </div>
          )}
        </div>
      </div>

      {/* Player Name with enhanced styling */}
      <div className="relative mt-6 mb-2">
        <div className="absolute inset-0 opacity-30"></div>
        <h2 className="relative text-2xl font-bold z-30 bg-gradient-to-r from-blue-800 to-purple-800 bg-clip-text text-transparent px-6 py-2">
          {player.player_name} {roleIcons[player.role]}
          {player.indian === false && <span className="ml-3 text-xl">✈️</span>}
        </h2>
      </div>

      {/* Price Card with new design */}
      <div className="flex gap-4 mt-2 pt-5 justify-center items-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="relative bg-white/95 backdrop-blur-sm rounded-lg border-2 border-yellow-400/50 px-6 py-3 shadow-xl">
            <span className="font-semibold text-gray-800 bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent">
              Base Price: ₹{formatPriceInCrores(player.base_price)}
            </span>
          </div>
        </div>
      </div>

      {/* Bidder Info with enhanced styling */}
      {currentBidder != null && (
        <div className="mt-4 relative">
          <div className={`absolute inset-0 ${showPlayerCard ? 'bg-green-500/20' : 'bg-yellow-500/20'} rounded-full blur`}></div>
          <h2 className={`relative text-xl font-bold animate-pulse px-6 py-2 rounded-full ${showPlayerCard ? 'text-green-700' : 'text-yellow-700'}`}>
            {showPlayerCard ? '🏆 Sold to' : '🔥 Current Bidder'}: {currentBidder}
          </h2>
        </div>
      )}

      {/* Stats Component */}
      <div className="mt-4 w-full max-w-md">
        <StatsForHomePage stats={player} />
      </div>

      {/* Action Button with new design */}
      {(showPlayerCard != true && player) && (
        <div className="mt-6 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#a86e1a] to-[#7a4a01] rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          <button
            onClick={markAsUnSold}
            className="relative bg-gradient-to-r from-[#d4a017] to-[#a86e1a] text-white px-3 py-3 rounded-lg hover:from-[#b8860b] hover:to-[#8b6508] transition-all duration-300 w-40 h-12 max-w-xs shadow-lg hover:shadow-xl font-semibold border-2 border-yellow-400/30"
          >
            {isMarkingUnsold ? (
              <span className="flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              'Mark as Unsold'
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;