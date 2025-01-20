import React, { useEffect, useState } from "react";

const Timer = ({ auctionEndTime }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(auctionEndTime) - new Date();
    if (difference > 0) {
      return {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-red-600 text-xl font-bold text-center">
        Auction Ended
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto space-x-4">
      {/* Last Purchased Player */}
      <div className="flex items-center space-x-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
          alt="MS Dhoni"
          className="w-16 h-16 rounded-full border border-gray-700"
        />
        <div>
          <p className="text-sm text-gray-400">Last Purchased Player</p>
          <p className="text-xl font-bold">MS Dhoni</p>
          <p className="text-sm text-gray-400">Team: Chennai Super Kings</p>
          <p className="text-lg text-green-500">₹12 Crore</p>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-2">IPL Auction Countdown</h1>
        <div className="flex space-x-4">
          <div className="text-center">
            <p className="text-4xl font-semibold">{timeLeft.hours}</p>
            <p className="text-sm uppercase text-gray-400">Hours</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold">{timeLeft.minutes}</p>
            <p className="text-sm uppercase text-gray-400">Minutes</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-semibold">{timeLeft.seconds}</p>
            <p className="text-sm uppercase text-gray-400">Seconds</p>
          </div>
        </div>
        <p className="mt-4 text-gray-400 text-sm">
          Auction ends at{" "}
          <span className="text-white font-medium">
            {new Date(auctionEndTime).toLocaleString()}
          </span>
        </p>
      </div>

      {/* Highest Bid */}
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-sm text-gray-400">Highest Bid</p>
          <p className="text-xl font-bold">₹16 Crore</p>
          <p className="text-sm text-gray-400">Player: Ben Stokes</p>
          <p className="text-sm text-gray-400">Team: Chennai Super Kings</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"
          alt="Ben Stokes"
          className="w-16 h-16 rounded-full border border-gray-700"
        />
      </div>
    </div>
  );
};

export default Timer;
