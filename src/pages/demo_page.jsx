import React from "react";

const IPLAuction = () => {
  // Hardcoded sample data
  const mostExpensivePlayer = {
    name: "VK",
    team: "Royal Challengers Bangalore",
    price: 170000000, // ₹17 crore
  };

  const currentPlayer = {
    name: "Jasprit Bumrah",
    basePrice: 20000000, // ₹2 crore
    currentBid: 85000000, // ₹8.5 crore
    matches: 120,
    wickets: 200,
    economy: 7.1,
    strikeRate: 150.2,
    runs: 450,
  };

  const lastSoldPlayer = {
    name: "Ruturaj Gaikwad",
    team: "Chennai Super Kings",
    price: 60000000, // ₹6 crore
  };

  const teams = [
    {
      name: "Mumbai Indians",
      amountLeft: 50000000, // ₹5 crore
      playersCount: 20,
    },
    {
      name: "Chennai Super Kings",
      amountLeft: 35000000, // ₹3.5 crore
      playersCount: 18,
    },
    {
      name: "Royal Challengers Bangalore",
      amountLeft: 70000000, // ₹7 crore
      playersCount: 22,
    },
    {
      name: "Kolkata Knight Riders",
      amountLeft: 45000000, // ₹4.5 crore
      playersCount: 19,
    },
  ];

  return (
    <div className="bg-gray-900 text-white h-screen p-6 space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">ECell NITK IPL Auction</h1>
        <p className="text-sm">Sponsored by [Your Sponsors]</p>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-3 gap-6">
        {/* Most Expensive Player */}
        <div className=" p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Most Expensive Player</h2>
          <p>Name: {mostExpensivePlayer.name}</p>
          <p>Team: {mostExpensivePlayer.team}</p>
          <p>Price: ₹{mostExpensivePlayer.price.toLocaleString()}</p>
        </div>

        {/* Current Player Info */}
        <div className=" p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Current Player</h2>
          <p>Name: {currentPlayer.name}</p>
          <p>Base Price: ₹{currentPlayer.basePrice.toLocaleString()}</p>
          <p>Current Bid: ₹{currentPlayer.currentBid.toLocaleString()}</p>
        </div>

        {/* Last Sold Player */}
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Last Sold Player</h2>
          <p>Name: {lastSoldPlayer.name}</p>
          <p>Team: {lastSoldPlayer.team}</p>
          <p>Price: ₹{lastSoldPlayer.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Player Stats */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Player Stats</h2>
        <p>Matches: {currentPlayer.matches}</p>
        <p>Wickets: {currentPlayer.wickets}</p>
        <p>Economy: {currentPlayer.economy}</p>
        <p>Strike Rate: {currentPlayer.strikeRate}</p>
        <p>Runs: {currentPlayer.runs}</p>
      </div>

      {/* Team Stats */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Team Stats</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2">Team</th>
              <th className="py-2">Amount Left</th>
              <th className="py-2">No. of Players</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-2">{team.name}</td>
                <td className="py-2">₹{team.amountLeft.toLocaleString()}</td>
                <td className="py-2">{team.playersCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IPLAuction;
