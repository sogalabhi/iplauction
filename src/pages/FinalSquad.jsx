import React from "react";
import { Link } from "react-router-dom";

const roleIcons = {
  "Batsmen": "🏏",
  "Bowler": "🎯",
  "All-rounder": "🏏🎯",
  "WK": "🧤",
};

const TeamsWithCompactDesign = ({ teamlist }) => {
  console.log(teamlist[1].color1);
  return (
    <div className="p-4 bg-gradient-to-br from-[#361602] from-40% to-[#021e31] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center my-2 tracking-wide animate-pulse text-white">
        Teams Squad
      </h1>
      <Link
        to={"/"}
        className="bg-green-500 text-white px-4 py-2 my-2 rounded hover:bg-green-600"
      >
        Home
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        {teamlist.map((team, index) => (
          <div
            key={index}
            className="border min-h-60 rounded-xl shadow-lg bg-gradient-to-tr from-gray-100 to-white transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            {/* Team Header */}
            <div
              className={`px-4 py-3 rounded-t-xl  flex flex-row justify-between items-center`}
              style={{
                background: `linear-gradient(to bottom right, #${team.color1}, #${team.color2})`,
              }}
            >
              <div>
                <h2 className="text-lg font-extrabold">{team.name}</h2>
                <p className="text-xs font-medium text-gray-700">
                  Purse Balance: {team.purse} Lakhs
                </p>
              </div>
              <img
                src={`src/assets/Images/${team.logo}`}
                alt={team.name}
                className="h-14 w-14 rounded-full border-2 border-white"
              />
            </div>

            {/* Squad Section */}
            <div className="px-4 pb-4">
              <ul className="space-y-2">
                {team.squad.map((player, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-gray-200 px-3 py-2 rounded-lg transform hover:bg-gray-300 transition duration-200"
                  >
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 font-semibold mr-2">
                        {player.name}
                      </span>

                      {player.isOverseas && (
                        <span className="text-blue-500 text-lg animate-bounce">
                          ✈️
                        </span>
                      )}
                    </div>
                    <span className="text-gray-600 text-xs">
                      {roleIcons[player.role]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsWithCompactDesign;
