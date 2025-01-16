import React from "react";

const CardForHomePage = ({ player, title }) => {
  return (
    <div className="my-5 mx-5 bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-4">
      <h2 className="text-xl font-bold text-white text-center mb-4">
        {title}
      </h2>
      <div className="flex items-center">
        {/* Player Image */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-red-400 overflow-hidden">
          <img
            src={player.url}
            alt="Player"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Player Details */}
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-white">{player.name}</h3>
          <p className="text-sm text-gray-300">
            Sold to: <span className="font-bold text-yellow-300">{player.to_team}</span>
          </p>
          <p className="text-sm text-gray-300">
            Final Price: <span className="font-bold text-green-400">{player.final_price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardForHomePage;
