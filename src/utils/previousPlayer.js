import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetchPrevPlayer = async () => {
    try {
        const response = await fetch(`${SUPABASE_URL}CricketPlayers?select=*&order=time_of_selling.desc&limit=1`, {
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