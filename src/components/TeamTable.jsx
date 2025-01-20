import React from "react";

const TeamTable = () => {
    const teams = [
        { name: "Team Titans", players: 11, balance: "$2,000,000" },
        { name: "Phoenix Warriors", players: 9, balance: "$1,800,000" },
        { name: "Shadow Knights", players: 12, balance: "$1,500,000" },
    ];

    return (
        <div className="w-11/12 mx-5 max-w-4xl bg-white/10 backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-6">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
                Team Details
            </h2>
            <table className="w-full text-left text-white border-separate border-spacing-y-3">
                <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg">
                        <th className="p-3 rounded-l-lg">Team Name</th>
                        <th className="p-3">Number of Players</th>
                        <th className="p-3 rounded-r-lg">Purse Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team, index) => (
                        <tr
                            key={index}
                            className="bg-white/10 hover:bg-white/20 transition rounded-lg"
                        >
                            <td className="p-3 rounded-l-lg">{team.name}</td>
                            <td className="p-3">{team.players}</td>
                            <td className="p-3 rounded-r-lg">{team.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeamTable;
