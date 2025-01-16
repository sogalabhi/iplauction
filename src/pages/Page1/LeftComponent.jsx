import React from 'react';

const LeftComponent = () => {
  // Example data
  const mostExpensivePlayer = {
    name: 'Virat Kohli',
    team: 'Royal Challengers Bangalore',
    price: '$2.4 Million',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTC6vBReh7p0IdW5F5rAwRBTmJNcDeJzUR21ZaKE1_1h1memFkYk6o2qG7lGHJArg5GUb0lK63F_opIZiY', // Replace with actual image URL
    teamColor: '#F05A28', // Royal Challengers Bangalore color
  };

  const lastSoldPlayer = {
    name: 'MS Dhoni',
    team: 'Chennai Super Kings',
    price: '$1.8 Million',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTC6vBReh7p0IdW5F5rAwRBTmJNcDeJzUR21ZaKE1_1h1memFkYk6o2qG7lGHJArg5GUb0lK63F_opIZiY', // Replace with actual image URL
    teamColor: '#F7A900', // Chennai Super Kings color
  };

  return (
    <div className="p-8 font-sans space-y-6 w-[550px]">
      {/* Most Expensive Player */}
      <div
        className="flex flex-col mb-6 bg-opacity-30 backdrop-blur-lg rounded-lg border border-white shadow-lg"
        style={{ position: 'relative', backgroundColor: mostExpensivePlayer.teamColor,}}
      >
        {/* Heading */}
        <div className="text-left text-xl font-semibold text-black py-2 pb-1 px-4">
          Most Expensive Player
        </div>
        
        {/* Player Info */}
        <div className="flex">
          {/* Player Image */}
          <div className="flex-shrink-0 p-4">
            <img
              src={mostExpensivePlayer.imageUrl}
              alt={mostExpensivePlayer.name}
              className="w-[80px] h-[80px] rounded-full border-2 border-white"
            />
          </div>
          
          {/* Player Details */}
          <div className="flex-grow p-4">
            <h2 className="text-lg font-semibold">{mostExpensivePlayer.name}</h2>
            <p className="text-md">{mostExpensivePlayer.team}</p>
            <p className="text-md">{mostExpensivePlayer.price}</p>
          </div>
        </div>
      </div>

      {/* Last Sold Player */}
      <div
        className="flex flex-col rounded-lg border border-white shadow-lg"
        style={{ position: 'relative', backgroundColor: lastSoldPlayer.teamColor, backdropFilter: 'blur(16px) saturate(50%)'}}
      >
        {/* Heading */}
        <div className="text-left text-xl font-semibold text-black py-2 px-4">
          Last Sold Player
        </div>
        
        {/* Player Info */}
        <div className="flex">
          {/* Player Image */}
          <div className="flex-shrink-0 p-4">
            <img
              src={lastSoldPlayer.imageUrl}
              alt={lastSoldPlayer.name}
              className="w-[80px] h-[80px] rounded-full border-2 border-white"
            />
          </div>
          
          {/* Player Details */}
          <div className="flex-grow p-4">
            <h2 className="text-lg font-semibold">{lastSoldPlayer.name}</h2>
            <p className="text-md">{lastSoldPlayer.team}</p>
            <p className="text-md">{lastSoldPlayer.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftComponent;
