const SUPABASE_URL = "https://ykpijunxogyxoiveffdq.supabase.co/rest/v1/";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlrcGlqdW54b2d5eG9pdmVmZmRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzM0MTcsImV4cCI6MjA1MjQ0OTQxN30.m1m6O47gtaZtc9IMhQ_y1eKrdd-_jROL2JuI7aTupL4";

export const updateTeam = async (teamId, amountToDeduct) => {
  try {
    const response = await fetch(`${SUPABASE_URL}Teams?id=eq.${teamId}`, {
      method: "PATCH",
      headers: {
        apiKey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purse: `purse-${amountToDeduct}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error updating team: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
