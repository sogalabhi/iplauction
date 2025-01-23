const SUPABASE_URL = "https://ykpijunxogyxoiveffdq.supabase.co/rest/v1/";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcGlqdW54b2d5eG9pdmVmZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzM0MTcsImV4cCI6MjA1MjQ0OTQxN30.m1m6O47gtaZtc9IMhQ_y1eKrdd-_jROL2JuI7aTupL4";

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