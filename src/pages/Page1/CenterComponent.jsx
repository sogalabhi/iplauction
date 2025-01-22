import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Overview from "./Overview";

import { Link } from 'react-router-dom';
import ReactConfetti from "react-confetti";
import { markPlayerAsSold } from "../../utils/updatePlayer";
import { fetchTeamsWithSquads } from "../../utils/teamswithplayers";

const CenterComponent = ({ initteamlist, initplayersList }) => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);
  const [currentBidder, setCurrentBidder] = useState(null);
  const [currentBidderId, setCurrentBidderId] = useState(0);
  const [currentBid, setCurrentBid] = useState(0);
  const [playersList, setPlayersList] = useState(initplayersList);
  const [teamsList, setTeamsList] = useState(initteamlist);
  useEffect(() => {
    setPlayersList(initplayersList);
  }, [initplayersList])
  useEffect(() => {
    setTeamsList(initteamlist);
  }, [initteamlist])

  const getAllTeamswithplayers = async () => {
    fetchTeamsWithSquads().then((teams) => {
      setTeamsList(teams);
      console.log('updated teamsWithSquads: ', teams)
    });
  }

  const markAsSold = async () => {
    setShowHammer(true);
    var player = playersList[currentIndex];
    const { id, final_price, sold_to_team_id } = player;
    try {
      await markPlayerAsSold(id, final_price, sold_to_team_id);
    } catch (error) {
      console.error("Error in marking as sold:", error.message);
    }
    setTimeout(() => {
      setShowHammer(false);
      setShowPlayerCard(true);
      setIsPlayerSold(true);
    }, 2000);
    getAllTeamswithplayers();
  };


  const nextPlayer = () => {
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    setCurrentBid(0);
    setCurrentBidderId(0);
    setCurrentBidder(null);
  };

  const handleBid = async (sold_to_team_id) => {
    console.log('current index:', currentIndex);
    console.log('base:', playersList);
    setCurrentBid((prevBid) => {
      let final_bid;
      if (prevBid === 0) {
        final_bid = playersList[currentIndex].base_price;
      } else if (prevBid < 100) {
        final_bid = prevBid + 10;
      } else if (prevBid < 500) {
        final_bid = prevBid + 20;
      } else {
        final_bid = prevBid + 50;
      }
      try {
        setPlayersList(prevList => {
          const updatedList = [...prevList];
          updatedList[currentIndex] = { ...updatedList[currentIndex], final_price: final_bid, sold_to_team_id: parseInt(sold_to_team_id) };
          console.log('Player bid successfully!', updatedList[currentIndex]);
          return updatedList;
        });
      } catch (error) {
        console.error('Error during bidding:', error.message);
      }
      return final_bid;
    });
  };

  const handleKeyPress = async (event) => {
    var key = event.key;
    if (key >= 0 && key <= teamsList.length) {
      if (key == 0) {
        key = 10;
      }
      setCurrentBidder(teamsList[key - 1].name);
      setCurrentBidderId(key);
      await handleBid(key, currentBid);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [teamsList]);

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
                currentBid={currentBid}
              />}
            </div>
            <div className="flex-1">
              <Overview />
            </div>
          </div>

        </div>
      )
      }
      {
        !isPlayerSold && !showPlayerCard && (
          <div className="text-center flex gap-4 justify-center py-2">
            {currentBid > 0 && <button
              onClick={markAsSold}
              className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Mark as Sold
            </button>}
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
          </div>
        )
      }

      {
        showPlayerCard && (
          <div className="flex flex-col items-center">
            {isPlayerSold && (
              <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
            )}
            <h1 className="text-4xl py-8">🎉 Player Sold 🎉</h1>
            {playersList.length > 0 && <PlayerCard
              key={currentIndex}
              player={playersList[currentIndex]}
              onSold={setIsPlayerSold}
              currentBidder={currentBidder}
              currentBid={currentBid}
            />}
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
