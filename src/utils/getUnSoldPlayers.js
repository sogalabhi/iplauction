import { SUPABASE_URL, SUPABASE_KEY } from '../lib/supabase.js';

export const fetchUnsoldPlayers = async () => {
    try {
        // First, let's check what players exist with different final_price values
        const allPlayersResponse = await fetch(`${SUPABASE_URL}CricketPlayers?order=id.asc`, {
            method: "GET",
            headers: {
                apiKey: SUPABASE_KEY,
                Authorization: `Bearer ${SUPABASE_KEY}`,
            },
        });

        if (!allPlayersResponse.ok) {
            throw new Error(`Error fetching all players: ${allPlayersResponse.statusText}`);
        }
        
        const allPlayers = await allPlayersResponse.json();
        console.log('All players:', allPlayers);
        
        // Check distribution of final_price values
        const priceDistribution = allPlayers.reduce((acc, player) => {
            const price = player.final_price;
            if (price === null) acc.null++;
            else if (price === -1) acc.unsold++;
            else if (price === 0) acc.zero++;
            else if (price > 0) acc.sold++;
            return acc;
        }, { null: 0, unsold: 0, zero: 0, sold: 0 });
        
        console.log('Price distribution:', priceDistribution);
        
        // Filter players with final_price null (unauctioned)
        const unsoldPlayers = allPlayers.filter(player => player.final_price === null);
        console.log('Unauctioned players (final_price null):', unsoldPlayers);
        
        return unsoldPlayers;
    } catch (error) {
        console.error('Error in fetchUnsoldPlayers:', error.message);
        return [];
    }
};