import React, { useState } from "react";
import SponsorCarousel from "./SponsorCarousel";
import PlayerCard from "./PlayerCard";
import LeftComponent from "./LeftComponent";
import Confetti from "react-confetti";
import Ha from "./Ha";
import Overview from './Overview'
import { Link } from "react-router-dom";

const CenterComponent = () => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPlayerCard, setShowPlayerCard] = useState(false);
  const [showHammer, setShowHammer] = useState(false);

  
  const [players, setPlayers] = useState([
    {
      id: 1,
      name: "Virat Kohli",
      teamId:1,
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
      teamId:3,
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
      teamId:2,
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

  //Used fro assigning the team for a player after sold out
  const [teams, setTeams] = useState([
    { teamId: 1, teamName: "Team A", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 2, teamName: "Team B", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 3, teamName: "Team C", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 4, teamName: "Team D", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 5, teamName: "Team E", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 6, teamName: "Team F", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 7, teamName: "Team J", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 8, teamName: "Team H", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 9, teamName: "Team I", fundsRemaining: 10000000, playerCount: 0 },
    { teamId: 10, teamName: "Team K", fundsRemaining: 10000000, playerCount: 0 },
  ]);

  const markAsSold = () => {
    setShowHammer(true);
    setTimeout(() => {
      setShowHammer(false);
      setShowPlayerCard(true);
      setIsPlayerSold(true);
      
      const soldPlayer = players[currentIndex];
      setTeams((prevTeams) =>
        prevTeams.map((team) =>
          team.teamId === soldPlayer.teamId
            ? {
                ...team,
                fundsRemaining: team.fundsRemaining - soldPlayer.currentBid, 
                playerCount: team.playerCount + 1, 
              }
            : team
        )
      );
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
    <div className={`min-h-screen bg-black text-white`}>
      {!isPlayerSold && !showPlayerCard && (
        <div className="py-1">
          <h1 className="text-center text-4xl py-7">E-CELL NITK IPL AUCTION</h1>
          <h2 className="text-center text-2xl">Sponsored By</h2>
          <SponsorCarousel />
          <div className="relative flex justify-center items-center">
            <div className="relative">
              <PlayerCard
                key={currentIndex}
                player={players[currentIndex]}
                onSold={setIsPlayerSold}
                showHammer={showHammer}
              />
            </div>
          </div>
        </div>
      )}
      {!isPlayerSold && !showPlayerCard && (
        <div className="text-center mt-8 flex gap-4 justify-center py-2">
          <button
            onClick={markAsSold}
            className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Mark as Sold
          </button>
        <Link
          to={"/teamswithsquad"}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
      )}
      
      {showPlayerCard ? (
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
          <div className="text-center mt-4 ">
            <button
              onClick={nextPlayer}
              className="bg-blue-500 m-2 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Next Player
            </button>
            <button
              
              className="bg-blue-500 m-2 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Break
            </button>
          </div>
        </div>
      ):
        <div>
          <Overview teams={teams}/>
        </div>
      }
      
      <div className="flex items-start gap-[120px]">
          <LeftComponent/>
      </div>
           
    </div>
  );
};

export default CenterComponent;
