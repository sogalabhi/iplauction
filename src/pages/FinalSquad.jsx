import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTeamsWithSquads } from "../utils/teamswithplayers";

const roleIcons = {
  "Batsmen": "🏏",
  "Bowler": "🎯",
  "All-rounder": "🏏🎯",
  "WK": "🧤",
};

const TeamsWithCompactDesign = () => {

  const [teamswithsquad, setTeamsWithSquad] = useState([]);
  const getAllTeamswithplayers = async () => {
    fetchTeamsWithSquads().then((teams) => {
      setTeamsWithSquad(teams);
    });
  }
  function formatPriceInLakhs(price) {

    if (price >= 100) {
      // Convert to crore
      const crore = (price / 100).toFixed(2); // 2 decimal places
      return `${Number(crore).toLocaleString('en-IN')} Crore`;
    } else {
      // Keep it in lakh
      return `${Number(price).toLocaleString('en-IN')} Lakh`;
      // return price;
    }
  }
  useEffect(() => {
    getAllTeamswithplayers();
  }, [])

  return (
    <div className="p-4 bg-[url('https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/sign/teamlogo/bg.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ0ZWFtbG9nby9iZy5qcGciLCJpYXQiOjE3Mzc2NjkyMTksImV4cCI6MTc2OTIwNTIxOX0.EV0N-PHzI_vLLYN6ImccszenCZbYuHWPf_DQ_5nWOaw&t=2025-01-23T21%3A53%3A36.437Z')] bg-no-repeat bg-cover from-[#361602] from-40% to-[#021e31] min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-6xl font-extrabold text-center mt-2 mb-4 tracking-wide animate-pulse text-white">
        Teams Squad
      </h1>
      <Link
        to={"/"}
        className="absolute top-5 left-10 bg-green-500 text-white px-4 py-2 my-2 rounded hover:bg-green-600"
      >
        Home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {teamswithsquad.map((team, index) => (
          <div
            key={index}
            className="border min-h-60 rounded-xl shadow-lg bg-gradient-to-tr from-gray-100 to-white transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            {/* Team Header */}
            <div
              className={`px-4 py-3 rounded-t-xl  flex flex-row justify-between items-center text-${team.textColor}`}
              style={{
                background: `linear-gradient(to bottom right, #${team.color1}, #${team.color2})`,
              }}
            >
              <div>
                <h2 className="text-lg font-extrabold">{team.name}</h2>
                <p className="text-xs font-medium">
                  Purse Balance: {formatPriceInLakhs(team.purse)}
                </p>
              </div>
              <img
                src={`${team.teamLogo}`}
                alt={team.name}
                className="h-14 w-14 rounded-full border-2 border-white"
              />
            </div>

            {/* Squad Section */}
            <div className="p-4">
              <ul className="space-y-2">
                <div className="grid grid-cols-2 gap-4">
                  {/* First column */}
                  <ul>
                    {team.squad.slice(0, Math.ceil(team.squad.length / 2)).map((player, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between bg-gray-200 p-2 my-1 rounded-lg transform hover:bg-gray-300 transition duration-200"
                      >
                        <div className="flex items-center">
                          <span className="text-xs text-gray-800 font-semibold mr-2">
                            {player.name}
                          </span>
                          {player.isOverseas && (
                            <span className="text-blue-500 text-lg animate-bounce">✈️</span>
                          )}
                        </div>
                        <span className="text-gray-600 text-xs">{roleIcons[player.role]}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Second column */}
                  <ul>
                    {team.squad.slice(Math.ceil(team.squad.length / 2)).map((player, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between bg-gray-200 px-1 my-1 rounded-lg transform hover:bg-gray-300 transition duration-200"
                      >
                        <div className="flex items-center">
                          <span className="text-xs text-gray-800 font-semibold mr-2">
                            {player.name}
                          </span>
                          {player.isOverseas && (
                            <span className="text-blue-500 animate-bounce">✈️</span>
                          )}
                        </div>
                        <span className="text-gray-600 text-xs">{roleIcons[player.role]}</span>
                      </li>
                    ))}
                  </ul>
                </div>


              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsWithCompactDesign;
