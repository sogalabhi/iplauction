import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const insertSupabaseData = async (table, data) => {
    try {
        const response = await fetch(`${SUPABASE_URL}${table}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error inserting data: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error.message);
        return null;
    }
};
