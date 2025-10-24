import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetcnsoldPlayers = async () => {
    try {
        const response = await fetch(`${SUPABASE_URL}CricketPlayers?order=id.asc`, {
            method: "GET",
            headers: {
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();

        // Filter players where sold_to_team_id is not equal to 0
        const soldPlayers = data.filter(player => player.sold_to_team_id !== 0);
        return soldPlayers;
    } catch (error) {
        console.error(error.message);
        return [];
    }
};