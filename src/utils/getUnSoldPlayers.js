import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetchUnsoldPlayers = async () => {
    try {
        const response = await fetch(`${SUPABASE_URL}CricketPlayers?order=id.asc&sold_to_team_id=eq.0`, {
            method: "GET",
            headers: {
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error(error.message);
        return [];
    }
};