import React from "react";

const teams = [
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },
  {
    name: "Team A",
    color: "bg-red-500",
    moneySpent: "₹10 Crore",
    logo:"RCBlogo.png",
    squad: [
      { name: "Player 1", role: "Batter", isOverseas: true },
      { name: "Player 2", role: "Bowler", isOverseas: false },
      { name: "Player 3", role: "All-rounder", isOverseas: true },
      { name: "Player 4", role: "Wicketkeeper", isOverseas: false },
    ],
  },



];

const roleIcons = {
  Batter: "🏏",
  Bowler: "🎯",
  "All-rounder": "⚡",
  Wicketkeeper: "🧤",
};

const TeamsWithCompactDesign = ({teamlist}) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">IPL Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 ">
        {teamlist.map((team, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white"
          >
            {/* Team Header */}
            <div className={`p-3 ${team.color} rounded-t-lg text-white flex flex-row justify-between`}>
              <div>
                <h2 className="text-lg font-bold">{team.name}</h2>
                <p className="text-xs">Money Spent: {team.moneySpent}</p>
              </div>
              <div>
                <img src={`src/assets/Images/${team.logo}`} alt="" className="h-14" />
              </div>
            </div>

            {/* Squad Section */}
            <div className="p-3">
              <ul className="space-y-1">
                {team.squad.map((player, idx) => (
                  <li
                    key={idx}
                    className="flex items-center justify-between bg-gray-50 px-2 py-1 rounded"
                  >
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 mr-2 font-medium">
                        {player.name}
                      </span>
                      <span className="text-gray-500 text-xs">
                        {roleIcons[player.role]}
                      </span>
                    </div>
                    {player.isOverseas && (
                      <span className="text-blue-500 text-lg">✈️</span>
                    )}
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
