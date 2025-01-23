import React, { useState, useEffect, useRef } from "react";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Overview from "./Overview";

import { Link } from 'react-router-dom';
import ReactConfetti from "react-confetti";
import { markPlayerAsSold } from "../../utils/updatePlayer";
import { fetchTeamsWithSquads } from "../../utils/teamswithplayers";
import { fetchUnsoldPlayers } from "../../utils/getUnSoldPlayers";
import { updatePurseOfTeam } from "../../utils/updateTeam";

const CenterComponent = ({ initteamlist, initplayersList }) => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
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

  const getTeamAndPlayers = async () => {
    fetchUnsoldPlayers().then((players) => {
      setPlayersList(players);
    });
    fetchTeamsWithSquads().then((teams) => {
      setTeamsList(teams);
    });
  }

  const markAsSold = async () => {
    setShowHammer(true);
    var player = playersList[0];
    const { id, final_price, sold_to_team_id, sold_to_team } = player;
    try {
      await markPlayerAsSold(id, final_price, sold_to_team_id, sold_to_team);
    } catch (error) {
      console.error("Error in marking as sold:", error.message);
    }
    var team = teamsList[sold_to_team_id - 1];
    team.purse = team.purse - final_price;
    try {
      await updatePurseOfTeam(sold_to_team_id, team.purse);
    } catch (error) {
      console.error("Error in marking as sold:", error.message);
    }
    setTimeout(() => {
      setShowHammer(false);
      setShowPlayerCard(true);
      setIsPlayerSold(true);
    }, 2000);
  };


  const nextPlayer = () => {
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentBid(0);
    setCurrentBidderId(0);
    setCurrentBidder(null);
    getTeamAndPlayers();
  };

  const handleBid = async (sold_to_team_id, bidding_team) => {
    setCurrentBid((prevBid) => {
      let final_bid;
      if (prevBid === 0) {
        final_bid = playersList[0].base_price;
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
          updatedList[0] = { ...updatedList[0], final_price: final_bid, sold_to_team_id: parseInt(sold_to_team_id), sold_to_team: bidding_team };
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
      var bidding_team = teamsList[key - 1].name;
      setCurrentBidder(bidding_team);
      setCurrentBidderId(key);
      await handleBid(key, bidding_team);
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
                player={playersList[0]}
                onSold={setIsPlayerSold}
                showHammer={showHammer}
                currentBidder={currentBidder}
                currentBid={currentBid}
              />}
              {playersList.length == 0 &&
                <div className="text-center">
                  <h1 className="text-2xl mb-5">No Players Left</h1>
                  <Link
                    to={"/teamswithsquad"}
                    className="flexw-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Team Squad
                  </Link>
                </div>
              }
            </div>
            <div className="flex-1">
              <Overview />
            </div>
          </div>

        </div>
      )
      }
      {
        !isPlayerSold && !showPlayerCard && playersList.length > 0 && (
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
            <Link
              to={"/break"}
              className="flexw-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Break
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
              key={0}
              player={playersList[0]}
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
