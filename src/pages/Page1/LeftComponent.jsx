import React from 'react';
import { useEffect, useState } from 'react';
import viratKohliImage from './viratKohli.jpeg';
import {fetchExpensivePlayer} from '../../utils/expensivePlayer.js';
import {fetchPrevPlayer} from '../../utils/previousPlayer.js';

const LeftComponent = () => {
  // Example data
  const mostExpensivePlayer = {
    name: 'Virat Kohli',
    team: 'Royal Challengers Bangalore',
    price: '$2.4 Million',
    imageUrl: 'https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/dhoni.png', // Replace with actual image URL
    teamColor: '#F05A28', // Royal Challengers Bangalore color
  };

  const lastSoldPlayer = {
    name: 'MS Dhoni',
    team: 'Chennai Super Kings',
    price: '$1.8 Million',
    imageUrl: 'https://ykpijunxogyxoiveffdq.supabase.co/storage/v1/object/public/players/dhoni.png', // Replace with actual image URL
    teamColor: '#F7A900', // Chennai Super Kings color
  };
  
  const [mostExpensivePlayer1, setPlayerData] = useState([]);
  const [lastSoldPlayer1, setLastSoldPlayer] = useState(null);

    useEffect(() => {
        const getPlayerData = async () => {
            const data = await fetchExpensivePlayer(); // Call the function
            setPlayerData(data); // Save the response array to state
        };

        // Fetch last sold player
        const getLastSoldPlayer = async () => {
          const data = await fetchPrevPlayer();
          setLastSoldPlayer(data);
        };

        getPlayerData(); // Fetch data on component mount
        getLastSoldPlayer();
    }, []);
  console.log(fetchExpensivePlayer());
  /*const mostExpensivePlayer1 = fetchExpensivePlayer();*/
  console.log(mostExpensivePlayer1);
  console.log(lastSoldPlayer1);
  /*const lastSoldPlayer1 = fetchPrevPlayer();*/

  return (
    <div className="p-8 font-sans space-y-6">
      {/* Most Expensive Player */}
      <div
        className="flex flex-col mb-6 rounded-lg border border-slate-1000 bg-no-repeat bg-cover "
        style={{backgroundImage: "url('https://images.news18.com/ibnlive/uploads/2024/03/royal-challengers-bengaluru-2024-03-b48979f9d2ac67312368a28efd770b05-16x9.jpg')", backdropFilter: 'blur(25px) saturate(150%)'}}
      >
        <div className='relative overflow-hidden isolate bg-[rgba(0,0,0,0.65)] rounded-lg'>
          
          {/* Heading */}
          <div className="text-left text-xl font-semibold py-2 pb-1 px-4">
            Most Expensive Player
          </div>
          
          {/* Player Info */}
          <div className="flex items-center">
            {/* Player Image */}
            {mostExpensivePlayer1.length > 0 ? (
              <>
              <div className="flex-shrink-0 p-4">
                <img
                  src={mostExpensivePlayer1[0].player_image}
                  alt={mostExpensivePlayer1[0].player_name}
                  className="w-[100px] h-[100px] rounded-full border-2 border-white object-cover"
                />
              </div>
              
              {/* Player Details */}
              <div className="flex-grow p-4">
                <h2 className="text-[20px] font-bold">{mostExpensivePlayer1[0].player_name}</h2>
                <p className="text-[18px]">{mostExpensivePlayer.team}</p>
                <p className="text-[18px]">{mostExpensivePlayer1[0].final_price}</p>
              </div>
              </>
            ):(
              <p className="p-4 text-gray-400">Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* Last Sold Player */}
      <div
        className="flex flex-col rounded-lg border border-slate-1000 bg-no-repeat bg-cover shadow-lg"
        style={{backgroundImage: "url('https://static.wikia.nocookie.net/0307f86d-9bed-4c6d-af9a-27605e713600/scale-to-width/755')", backdropFilter: 'blur(25px) saturate(150%)'}}
      >
        <div className='relative overflow-hidden isolate bg-[rgba(0,0,0,0.65)] rounded-lg'>
          {/* Heading */}
          <div className="text-left text-xl font-semibold py-2 px-4">
            Last Sold Player
          </div>
          
          {/* Player Info */}
          <div className="flex items-center">
            {/* Player Image */}
            {lastSoldPlayer1 ? (
              <>
            <div className="flex-shrink-0 p-4">
              <img
                src={lastSoldPlayer1[0].player_image}
                alt={lastSoldPlayer1[0].player_name}
                className="w-[100px] h-[100px] rounded-full border-2 border-white object-cover"
              />
            </div>
            
            {/* Player Details */}
            <div className="flex-grow p-4">
              <h2 className="text-[20px] font-bold">{lastSoldPlayer1[0].player_name}</h2>
              <p className="text-[18px]">{lastSoldPlayer.team}</p>
              <p className="text-[18px]">{lastSoldPlayer1[0].final_price}</p>
            </div>
            </>
          ):(
            <p className="p-4 text-gray-400">Loading...</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
