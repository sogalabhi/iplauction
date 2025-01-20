import React, { useState } from "react";

const Overview = ({ teams }) => {


  return (
    <div className="w-11/12 mx-5 max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Team Overview</h2>
      <table className="table-auto w-full text-left  border-0">
        <thead className="">
          <tr>
            <th className="p-2 ">Team Name</th>
            <th className="p-2 text-center">No. of Players</th>
            <th className="p-2 text-right">Funds Remaining</th>
          </tr>
        </thead>
        <tbody>
          {console.log(teams)}
          {teams.map((team) => (
            <tr key={team.id} className="hover:bg-gray-600">
              <td className="p-2">{team.name}</td>
              <td className="p-2 text-center">{team.playerCount}</td>
              <td className="p-2 text-right">₹{team.purse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
