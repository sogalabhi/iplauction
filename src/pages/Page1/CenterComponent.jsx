import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Confetti from "react-confetti";
import Ha from "./Ha";
import { Link } from "react-router-dom";
import CardForHomePage from "../../components/CardForHomePage";
import TeamTable from "../../components/TeamTable";
import Overview from "./Overview";
import BottomButtons from "../../components/BottomButtons";

const CenterComponent = ({ teamlist }) => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);


  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Virat Kohli",
      image: "https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/kohli.png",
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
      image: "https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/rohit.png",
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
      image: "https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/dhoni.png",
      basePrice: 3000000,
      currentBid: 6000000,
      matches: 40,
      wickets: 110,
      economy: 4.2,
      strikeRate: 140.3,
      runs: 1800,
    },
  ]);

  return (
    // <div className={`min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 text-white`}>
    <div className={`min-h-screen bg-gradient-to-b from-[#361602] from-40% to-[#021e31] text-white`}>
      {!isPlayerSold && !showPlayerCard && (
        <div className="py-1">
          <h1 className="text-center text-4xl py-3" style={{ 'font-family': "Alinea Incise W01 Regular" }}>E-CELL NITK IPL AUCTION</h1>
          <h2 className="text-center text-2xl">Sponsored By</h2>
          <div className="flex justify-center items-center gap-4 my-4">
            <img src="https://banner2.cleanpng.com/20240111/qtv/transparent-google-logo-colorful-google-logo-with-bold-green-1710929465092.webp" className="w-10 h-10 rounded-full" alt="" />
            <img src="https://banner2.cleanpng.com/20240111/qtv/transparent-google-logo-colorful-google-logo-with-bold-green-1710929465092.webp" className="w-10 h-10 rounded-full" alt="" />
            <img src="https://banner2.cleanpng.com/20240111/qtv/transparent-google-logo-colorful-google-logo-with-bold-green-1710929465092.webp" className="w-10 h-10 rounded-full" alt="" />
            <img src="https://banner2.cleanpng.com/20240111/qtv/transparent-google-logo-colorful-google-logo-with-bold-green-1710929465092.webp" className="w-10 h-10 rounded-full" alt="" />
            <img src="https://banner2.cleanpng.com/20240111/qtv/transparent-google-logo-colorful-google-logo-with-bold-green-1710929465092.webp" className="w-10 h-10 rounded-full" alt="" />
          </div>
          <div className="relative flex justify-center items-center">
            <div className="flex-1 pl-10">
              <LeftComponent />
            </div>
            <div className="relative flex-1">
              <PlayerCard
                key={currentIndex}
                player={players[currentIndex]}
                onSold={setIsPlayerSold}
                showHammer={showHammer}
              />
            </div>
            <div className="flex-1">
              <Overview teams={teamlist} />
            </div>
          </div>
          <BottomButtons isPlayerSold={isPlayerSold} setIsPlayerSold={setIsPlayerSold} currentIndex={currentIndex} showPlayerCard={showPlayerCard} players={players} setPlayers={setPlayers} setCurrentIndex={setCurrentIndex} setShowPlayerCard={setShowPlayerCard} />
        </div>
      )
      }

    </div >
  );
};

export default CenterComponent;
