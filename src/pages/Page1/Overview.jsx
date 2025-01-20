import React, { useState } from "react";

const Overview = ({teams}) => {
 

  return (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2 bg-gray-800 text-white p-5 rounded-lg shadow-lg w-72 lg:w-80 max-h-[75vh] overflow-y-auto">
    <h2 className="text-center text-lg font-semibold mb-4">Team Overview</h2>
    <table className="table-auto w-full text-left border-collapse border border-gray-700">
      <thead className="bg-gray-700 text-white">
        <tr>
          <th className="p-2 border border-gray-600">Team Name</th>
          <th className="p-2 border border-gray-600">No. of Players</th>
          <th className="p-2 border border-gray-600">Funds Remaining</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team) => (
          <tr key={team.teamId} className="hover:bg-gray-600">
            <td className="p-2 border border-gray-600">{team.teamName}</td>
            <td className="p-2 border border-gray-600 text-center">{team.playerCount}</td>
            <td className="p-2 border border-gray-600 text-right">₹{team.fundsRemaining}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default Overview;
