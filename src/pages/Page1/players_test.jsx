import { useEffect, useState } from "react";
import { supabase } from '../../lib/supabase.js';

export default function CricketPlayersTable() {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPlayers() {
            let { data, error } = await supabase.from("CricketPlayers").select("player_name, player_image");
            if (error) {
                console.error("Error fetching players:", error);
            } else {
                setPlayers(data);
            }
            setLoading(false);
        }
        fetchPlayers();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Cricket Players</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="table-auto w-full border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border px-4 py-2">Player</th>
                            <th className="border px-4 py-2">Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index} className="text-center">
                                <td className="border px-4 py-2">{player.player_name}</td>
                                <td className="border px-4 py-2">
                                    <img src={player.player_image} alt={player.player_name} className="w-60 h-60 object-cover mx-auto rounded-full" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}
