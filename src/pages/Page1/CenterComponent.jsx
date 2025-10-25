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
import { supabase } from "../../lib/supabase.js";

const CenterComponent = ({ initteamlist, initplayersList }) => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);
  const [currentBidder, setCurrentBidder] = useState(null);
  const [currentBidderId, setCurrentBidderId] = useState(0);
  const [currentBid, setCurrentBid] = useState(0);
  const [playersList, setPlayersList] = useState(initplayersList);
  const [teamsList, setTeamsList] = useState(initteamlist);
  
  // Modal states
  const [showBidModal, setShowBidModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [finalBidAmount, setFinalBidAmount] = useState('');
  useEffect(() => {
    setPlayersList(initplayersList);
  }, [initplayersList])
  useEffect(() => {
    if (!showPlayerCard)
      getTeamAndPlayers();
  }, [])

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


  const nextPlayer = async () => {
    setShowPlayerCard(false);
    setIsPlayerSold(false);
    setCurrentBid(0);
    setCurrentBidderId(0);
    setCurrentBidder(null);
    await getTeamAndPlayers();
  };

  const markAsUnSold = async () => {

    try {
      await markPlayerAsSold(playersList[0].id, 0, 0, null);
    } catch (error) {
      console.error("Error in marking as unsold:", error.message);
    }
    setCurrentBid(0);
    setCurrentBidderId(0);
    setCurrentBidder(null);
    await getTeamAndPlayers();
  }
  const handleSellClick = () => {
    setShowBidModal(true);
  };

  const handleBidSubmit = async () => {
    if (!selectedTeam || !finalBidAmount) return;
    
    const bidAmount = parseFloat(finalBidAmount);
    if (bidAmount <= 0) return;
    
    // Check if team has enough purse
    if (bidAmount > selectedTeam.purse) {
      alert('Team does not have enough purse!');
      return;
    }
    
    try {
      // Update player in database
      await markPlayerAsSold(
        playersList[0].id, 
        bidAmount, 
        selectedTeam.team_id, 
        selectedTeam.name
      );
      
      // Update team purse in database
      const newPurse = selectedTeam.purse - bidAmount;
      await updatePurseOfTeam(selectedTeam.team_id, newPurse);
      
      // Set the bid in UI
      setCurrentBidder(selectedTeam.name);
      setCurrentBidderId(selectedTeam.team_id);
      setCurrentBid(bidAmount);
      
      // Update player list
      setPlayersList(prevList => {
        const updatedList = [...prevList];
        updatedList[0] = { 
          ...updatedList[0], 
          final_price: bidAmount, 
          sold_to_team_id: selectedTeam.team_id, 
          sold_to_team: selectedTeam.name 
        };
        return updatedList;
      });
      
      // Update teams list with new purse
      setTeamsList(prevTeams => 
        prevTeams.map(team => 
          team.team_id === selectedTeam.team_id 
            ? { ...team, purse: newPurse }
            : team
        )
      );
      
      // Close modal
      setShowBidModal(false);
      setFinalBidAmount('');
      setSelectedTeam(null);
      
    } catch (error) {
      console.error('Error selling player:', error);
      alert('Error selling player. Please try again.');
    }
  };

  return (
    <div className={`min-h-screen bg-[#985c01]  text-white`}>
      <video src={`${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/video//video_2025-01-28%2022_42_02.webm`}
        autoPlay loop muted></video>
    {/* // <div className={`min-h-screen text-white bg-[#1c439e]`}> */}
      {/* <video src=
        "https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/video//video_2025-01-28%2022_42_02.webm"
        autoPlay loop muted
        className="absolute w-auto h-full max-h-full object-cover opacity-40 z-0"></video> */}
      {/* <img src="https://ecell.nitk.ac.in/navLogo.png" alt="" className="w-40 absolute z-40 top-5 left-4" /> */}
      <img src="https://ecell.nitk.ac.in/incub8L.png" alt="" className="w-32 absolute z-40 top-4 right-4" />
      {!isPlayerSold && !showPlayerCard && (
        <div className="py-1 relative z-10">
          <h1 className="text-center text-5xl pt-2 relative z-10 heading-font" style={{ textShadow: "4px 4px 0px #4f829c" }}>IPL MOCK AUCTION</h1>
          <h2 className="text-center text-lg pt-4">Sponsored by</h2>
          <div className="flex justify-center items-center gap-4 mt-2 p-4 rounded-lg">
            <img src="/sponsers/unstop.jpg" className="h-10 hover:scale-105 transition" alt="Unstop Logo" />
            <img src="/sponsers/indiastack.png" className="h-10 hover:scale-105 transition" alt="IndiaStack Logo" />
            <img src="/sponsers/umbra.png" className="h-10 hover:scale-105 transition" alt="UmbraPrivacy Logo" />
            <img src="/sponsers/justplace.png" className="h-10 hover:scale-105 transition" alt="JustPlace Logo" />
            <img src="/sponsers/vilcart.png" className="h-10 hover:scale-105 transition" alt="Vilcart Logo" />
            <img src="/sponsers/swipe.png" className="h-10 hover:scale-105 transition" alt="Swipe Logo" />
            <img src="/sponsers/esamudaay.png" className="h-10 hover:scale-105 transition" alt="eSamuday Logo" />
            <img src="/sponsers/abhibus.png" className="h-10 hover:scale-105 transition" alt="Abhibus Logo" />
          </div>
          <div className="relative flex justify-center items-center">
            <div className="flex-1 pl-10" >
              <LeftComponent />
            </div>
            <div className="relative flex-1 mt-20">
              {playersList.length > 0 && <PlayerCard
                markAsUnSold={markAsUnSold}
                markAsSold={markAsSold}
                player={playersList[0]}
                onSold={setIsPlayerSold}
                isPlayerSold={isPlayerSold}
                showPlayerCard={showPlayerCard}
                showHammer={showHammer}
                currentBidder={currentBidder}
                currentBid={currentBid}
              />}
              
              {/* Sell Button */}
              {playersList.length > 0 && !showPlayerCard && (
                <div className="mt-8 text-center flex justify-center gap-4">
                  <button
                      onClick={handleSellClick}
                      className="bg-[#985c01] text-white px-8 py-4 rounded-lg font-bold text-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                    >
                      🏆 SELL PLAYER
                    </button>
                  {/* <button
                     onClick={markAsUnSold}
                     className="bg-[#a86e1a] text-white px-4 py-2 rounded hover:bg-[#7a4a01] transition"
                   >
                     Mark as Unsold
                   </button> */}
                </div>
              )}
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
        showPlayerCard && (
          <div className="flex flex-col items-center">
            {isPlayerSold && (
              <ReactConfetti width={window.innerWidth} height={window.innerHeight} />
            )}
            <h1 className="text-center pt-2 relative heading-font text-5xl mt-6 py-8 mb-20 z-20" style={{ textShadow: "4px 4px 0px #4f829c" }}>Player Sold</h1>
            {playersList.length > 0 && <PlayerCard
              key={0}
              player={playersList[0]}
              onSold={setIsPlayerSold}
              currentBidder={currentBidder}
              currentBid={currentBid}
              showPlayerCard={showPlayerCard}
            />}
            <div className="text-center mt-4 flex gap-4">
              <button
                onClick={nextPlayer}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 relative z-30"
              >
                Next Player
              </button>

              <Link
                to={"/break"}
                className="relative z-30 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Break
              </Link>
              <Link
                to={"/teamswithsquad"}
                className="relative z-30 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
              >
                Team Squad
              </Link>
            </div>
          </div>
        )
      }

      {/* Sell Modal */}
      {showBidModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md mx-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Sell Player</h2>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Team
              </label>
              <select
                value={selectedTeam?.team_id || ''}
                onChange={(e) => {
                  const teamId = parseInt(e.target.value);
                  const team = teamsList.find(t => t.team_id === teamId);
                  setSelectedTeam(team);
                }}
                className="w-full px-3 py-2 border border-gray-300 text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Choose a team...</option>
                {teamsList.map((team) => (
                  <option key={team.team_id} value={team.team_id}>
                    {team.name} (₹{team.purse?.toLocaleString('en-IN')} Cr)
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Final Price (in Crores)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max={selectedTeam?.purse || 1000}
                value={finalBidAmount}
                onChange={(e) => setFinalBidAmount(e.target.value)}
                className="w-full px-3 py-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter amount in crores "
                autoFocus
              />
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={handleBidSubmit}
                className="flex-1 bg-green-500 px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Sell Player
              </button>
              <button
                onClick={() => {
                  setShowBidModal(false);
                  setFinalBidAmount('');
                  setSelectedTeam(null);
                }}
                className="flex-1 bg-gray-500 px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div >
  );
};

export default CenterComponent;
