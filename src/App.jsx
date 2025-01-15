import React from "react";
import Timer from "./components/Timer";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { Header } from "./components/Header";

const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center text-white">
      {/* Timer Section */}
      <Header />
      <div className="w-full max-w-5xl bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg mb-8">
        <Timer auctionEndTime="2025-01-20T18:30:00" />
      </div>

      {/* Infinite Moving Cards Section */}
      <div className="w-full max-w-5xl bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-lg mb-8">
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
};

export default App;


