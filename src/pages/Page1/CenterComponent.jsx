import React, { useState } from "react";
import SponsorCarousel from "./SponsorCarousel";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Confetti from "react-confetti";
import Ha from "./Ha";
import { Link } from "react-router-dom";
import CardForHomePage from "../../components/CardForHomePage";
import TeamTable from "../../components/TeamTable";

const CenterComponent = () => {
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

  const markAsSold = () => {
    setShowHammer(true);
    setTimeout(() => {
      setShowHammer(false);
      setShowPlayerCard(true);
      setIsPlayerSold(true);
    }, 2000);
  };


  const nextPlayer = () => {
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  const handleBid = () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentIndex) {
          let newBid = player.currentBid;
          if (newBid < 10000000) {
            newBid += 1000000;
          } else if (newBid < 50000000) {
            newBid += 2000000;
          } else {
            newBid += 5000000;
          }
          return { ...player, currentBid: newBid };
        }
        return player;
      })
    );
  };

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
          <div className="relative flex justify-center items-center mt-20">
            <div className="flex-1 pl-10">
              <LeftComponent />
              {/* <CardForHomePage title="Most Expensive Player" player={{ 'name': "MS Dhoni", 'final_price': "777crore", 'to_team': "RCB", 'url': 'https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/dhoni.png' }} />
              <CardForHomePage title="Last Player Sold" player={{ 'name': "Virat Kohli", 'final_price': "15crore", 'to_team': "CSK", 'url': "https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/kohli.png" }} /> */}
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
              <TeamTable />
            </div>
          </div>
        </div>
      )
      }
      {
        !isPlayerSold && !showPlayerCard && (
          <div className="text-center mt-8 flex gap-4 justify-center py-2">
            <button
              onClick={markAsSold}
              className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Mark as Sold
            </button>
            <Link
              to={"/teamswithsquad"}
              className="flexw-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Team Squad
            </Link>
            <button
              onClick={nextPlayer}
              className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Mark as Unsold
            </button>
            <button
              onClick={handleBid}
              className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Bid
            </button>
          </div>
        )
      }

      {
        showPlayerCard && (
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
        )
      }
    </div >
  );
};

export default CenterComponent;
