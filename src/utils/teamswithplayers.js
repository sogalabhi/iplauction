import { color } from "framer-motion";
import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

// Fetch teams and players data
export const fetchTeamsWithSquads = async () => {
    try {
        // Fetch teams data
        const teamsResponse = await fetch(`${SUPABASE_URL}Teams`, {
            method: "GET",
            headers: {
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });
        const teams = await teamsResponse.json();
        // Fetch players data
        const playersResponse = await fetch(`${SUPABASE_URL}CricketPlayers`, {
            method: "GET",
            headers: {
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });
        const players = await playersResponse.json();

        // Map teams with their squads
        const teamsWithSquads = teams.map((team) => ({
            team_id: team.id,
            name: team.team_name,
            playerCount: players.filter((player) => player.sold_to_team_id === team.id && player.final_price > 0).length,
            purse: team.purse,
            teamLogo: team.team_logo,
            textColor: team.text_color,
            squad: players
                .filter((player) => player.sold_to_team_id === team.id && player.final_price > 0)
                .map((player) => ({
                    name: player.player_name,
                    role: player.role,
                    isOverseas: !player.indian, // indian=true means not overseas
                    opi: player.opi,
                })),
            color1: team.color1,
            color2: team.color2,
        }));
        return teamsWithSquads.sort((a, b) => a.team_id - b.team_id);
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};