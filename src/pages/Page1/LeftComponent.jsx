import React from 'react';
import viratKohliImage from './viratKohli.jpeg';

const LeftComponent = () => {
  // Example data
  const mostExpensivePlayer = {
    name: 'Virat Kohli',
    team: 'Royal Challengers Bangalore',
    price: '$2.4 Million',
    imageUrl: viratKohliImage, // Replace with actual image URL
    teamColor: '#F05A28', // Royal Challengers Bangalore color
  };

  const lastSoldPlayer = {
    name: 'MS Dhoni',
    team: 'Chennai Super Kings',
    price: '$1.8 Million',
    imageUrl: 'https://wallpapercave.com/wp/wp1859094.jpg', // Replace with actual image URL
    teamColor: '#F7A900', // Chennai Super Kings color
  };

  return (
    <div className="p-8 font-sans space-y-6 w-[550px]">
      {/* Most Expensive Player */}
      <div
        className="flex flex-col mb-6 rounded-lg border border-slate-1000 bg-no-repeat bg-cover shadow-lg"
        style={{backgroundImage: "url('https://images.news18.com/ibnlive/uploads/2024/03/royal-challengers-bengaluru-2024-03-b48979f9d2ac67312368a28efd770b05-16x9.jpg')", backdropFilter: 'blur(25px) saturate(150%)'}}
      >
        <div className='relative overflow-hidden isolate bg-[rgba(0,0,0,0.65)]'>
          
          {/* Heading */}
          <div className="text-left text-xl font-semibold py-2 pb-1 px-4">
            Most Expensive Player
          </div>
          
          {/* Player Info */}
          <div className="flex items-center">
            {/* Player Image */}
            <div className="flex-shrink-0 p-4">
              <img
                src={mostExpensivePlayer.imageUrl}
                alt={mostExpensivePlayer.name}
                className="w-[100px] h-[100px] rounded-full border-2 border-white object-cover"
              />
            </div>
            
            {/* Player Details */}
            <div className="flex-grow p-4">
              <h2 className="text-[20px] font-bold">{mostExpensivePlayer.name}</h2>
              <p className="text-[18px]">{mostExpensivePlayer.team}</p>
              <p className="text-[18px]">{mostExpensivePlayer.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Last Sold Player */}
      <div
        className="flex flex-col rounded-lg border border-slate-1000 bg-no-repeat bg-cover shadow-lg"
        style={{backgroundImage: "url('https://static.wikia.nocookie.net/0307f86d-9bed-4c6d-af9a-27605e713600/scale-to-width/755')", backdropFilter: 'blur(25px) saturate(150%)'}}
      >
        <div className='relative overflow-hidden isolate bg-[rgba(0,0,0,0.65)]'>
          {/* Heading */}
          <div className="text-left text-xl font-semibold py-2 px-4">
            Last Sold Player
          </div>
          
          {/* Player Info */}
          <div className="flex items-center">
            {/* Player Image */}
            <div className="flex-shrink-0 p-4">
              <img
                src={lastSoldPlayer.imageUrl}
                alt={lastSoldPlayer.name}
                className="w-[100px] h-[100px] rounded-full border-2 border-white object-cover"
              />
            </div>
            
            {/* Player Details */}
            <div className="flex-grow p-4">
              <h2 className="text-[20px] font-bold">{lastSoldPlayer.name}</h2>
              <p className="text-[18px]">{lastSoldPlayer.team}</p>
              <p className="text-[18px]">{lastSoldPlayer.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
