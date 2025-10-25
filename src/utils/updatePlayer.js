import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const markPlayerAsSold = async (playerId, finalPrice, soldToTeamId, sold_to_team) => {
  if (finalPrice === 0) {
    // Player is unsold - reset all sold fields
    var date = new Date('2000-01-01');
    soldToTeamId = 0;
    sold_to_team = null;
  }
  else {
    // Player is sold - set current timestamp
    var date = new Date().toISOString()
  }
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
        'sold_to_team': sold_to_team,
        'time_of_selling': date
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = response.status;
    return data;
  } catch (error) {
    throw error;
  }
};
