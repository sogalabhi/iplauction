import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetcnsoldPlayers = async () => {
    try {
        const response = await fetch(`${SUPABASE_URL}CricketPlayers?order=id.asc&final_price=gt.0`, {
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

        // Return players where final_price is greater than 0 (sold players)
        return data;
    } catch (error) {
        console.error(error.message);
        return [];
    }
};