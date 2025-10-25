import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const getTeamFromTeamID = async (teamid) => {
    try {
        const response = await fetch(`${SUPABASE_URL}Teams?id=eq.${encodeURIComponent(teamid)}`, {
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