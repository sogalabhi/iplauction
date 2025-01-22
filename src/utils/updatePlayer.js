// Supabase setup
const SUPABASE_URL = "https://ykpijunxogyxoiveffdq.supabase.co/rest/v1/";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcGlqdW54b2d5eG9pdmVmZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzM0MTcsImV4cCI6MjA1MjQ0OTQxN30.m1m6O47gtaZtc9IMhQ_y1eKrdd-_jROL2JuI7aTupL4";

export const markPlayerAsSold = async (playerId, finalPrice, soldToTeamId) => {
  console.log("Marking player as sold:", playerId, (finalPrice), (soldToTeamId));
  try {
    const response = await fetch(`${SUPABASE_URL}CricketPlayers?id=eq.${playerId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        apiKey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
      },
      body: JSON.stringify({
        'final_price': finalPrice,
        'sold_to_team_id': soldToTeamId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = response.status;
    if (data === 204) {
      console.log("Player marked as sold successfully!");
    }
    return data;
  } catch (error) {
    console.error("Error updating player:", error.message);
    throw error;
  }
};
