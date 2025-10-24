import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const updatePurseOfTeam = async (teamId, new_purse) => {
  try {
    const response = await fetch(`${SUPABASE_URL}Teams?id=eq.${teamId}`, {
      method: "PATCH",
      headers: {
        apiKey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        purse: new_purse,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error updating team: ${ response.statusText }`);
    }
    return await response.json();
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
