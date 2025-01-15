import React from "react";

const teams = [
  {
    name: "Team A",
    color: "bg-red-500",
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

const TeamsWithCategories = ({teamlist}) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">IPL Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8">
        {teamlist.map((team, index) => (
          console.log(team),
          <div
            key={index}
            className="border rounded-lg shadow-lg overflow-hidden bg-white"
          >
            {/* Team Header */}
            <div className={`p-4 ${team.color} text-white`}>
              <h2 className="text-xl font-bold">{team.name}</h2>
              <p className="text-sm">Money Spent: {team.moneySpent}</p>
            </div>

            {/* Squad Section */}
            <div className="p-4 space-y-6">
              {["Batter", "Bowler", "All-rounder", "Wicketkeeper"].map(
                (role) => (
                  <div key={role}>
                    {/* Role Heading */}
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <span className="mr-2">{roleIcons[role]}</span>
                      {role}s
                    </h3>
                    {/* Player List */}
                    <ul className="space-y-2">
                      {team.squad
                        .filter((player) => player.role === role)
                        .map((player, idx) => (
                          <li
                            key={idx}
                            className="flex items-center justify-between bg-gray-50 p-2 rounded shadow-sm"
                          >
                            <span className="font-medium text-gray-700">
                              {player.name}
                            </span>
                            <div className="flex items-center">
                              {player.isOverseas && (
                                <span className="text-blue-500 text-lg mr-2">
                                  ✈️
                                </span>
                              )}
                              <span className="text-gray-700 text-2xl">
                                {roleIcons[player.role]}
                              </span>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsWithCategories;