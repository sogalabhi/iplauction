import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Overview from "./Overview";

import { Link } from 'react-router-dom';
import ReactConfetti from "react-confetti";
import { useNavigate } from 'react-router-dom';

const CenterComponent = ({ teamlist, playersList }) => {
  console.log(playersList);
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);
  const [currentBidder, setCurrentBidder] = useState(null);
  const [currentBidderId, setCurrentBidderId] = useState(0);
  const markAsSold = () => {
    setShowHammer(true);
    setTimeout(() => {
      setShowHammer(false);
      setShowPlayerCard(true);
      setIsPlayerSold(true);
    }, 2000);
  };

  const navigate = useNavigate();
  const nextPlayer = () => {
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
  };

  const handleBid = async () => {
    setPlayers((prevPlayers) =>
      prevPlayers.map((player, index) => {
        if (index === currentIndex) {
          let newBid = player.currentBid;
          console.log('currentBid: ', currentBid);
          if (newBid < 100) {
            newBid += 10;
          } else if (newBid < 500) {
            newBid += 20;
          } else {
            newBid += 50;
          }
          return { ...player, currentBid: newBid };
        }
        return player;
      })
    );
  };
  const handleKeyPress = async (event) => {
    const key = event.key;
    if (key >= 1 && key <= teamlist.length) {
      console.log(teamlist[key - 1].name);
      setCurrentBidder(teamlist[key - 1].name);
      setCurrentBidderId(key);
      await handleBid();
      console.log('teamlist: ', teamlist);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [teamlist]);


  const [players, setPlayers] = useState(playersList);

  return (
    // <div className={`min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600 text-white`}>
    <div className={`min-h-screen bg-gradient-to-b from-[#361602] from-40% to-[#021e31] text-white`}>
      {!isPlayerSold && !showPlayerCard && (
        <div className="py-1">
          <h1 className="text-center text-4xl py-3" style={{ 'fontFamily': "Alinea Incise W01 Regular" }}>E-CELL NITK IPL AUCTION</h1>
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
              {playersList.length > 0 && <PlayerCard
                key={currentIndex}
                player={playersList[currentIndex]}
                onSold={setIsPlayerSold}
                showHammer={showHammer}
                currentBidder={currentBidder}
              />}
            </div>
            <div className="flex-1">
              <Overview teams={teamlist} />
            </div>
          </div>

        </div>
      )
      }
      {
        !isPlayerSold && !showPlayerCard && (
          <div className="text-center flex gap-4 justify-center py-2">
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

            <button onClick={() => navigate('/timer')}
                    className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >Break !</button>
          </div>
        )
      }

      {
        showPlayerCard && (
          <div className="flex flex-col items-center overflow-x-hidden">
            {isPlayerSold && (
              <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
            )}
            <h1 className="text-4xl py-8">🎉 Player Sold 🎉</h1>
            {playersList.length > 0 && <PlayerCard
              key={currentIndex}
              player={playersList[currentIndex]}
              onSold={setIsPlayerSold}
            />}
            <div className="text-center mt-4">
              <button
                onClick={nextPlayer}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Next Player
              </button>
              <button onClick={() => navigate('/timer')}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-10"
              >Break !</button>
            </div>
          </div>
        )
      }
    </div >
  );
};

export default CenterComponent;
