import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetchSupabaseData = async (table) => {
    try {
        const response = await fetch(`${SUPABASE_URL}${table}?order=id.asc`, {
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