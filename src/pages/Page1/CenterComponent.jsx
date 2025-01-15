

import React, { useState } from "react";
import SponsorCarousel from "./SponsorCarousel";
import PlayerCard from "./PlayerCard";

const Page1 = () => {
  const [isPlayerSold, setIsPlayerSold] = useState(false);
  return (
    <div className={`${isPlayerSold ? "overflow-hidden" : ""} min-h-screen bg-black text-white`}>
      {!isPlayerSold && (
        <div className="py-1">
          <h1 className="text-center text-4xl py-7">E-CELL NITK IPL AUCTION</h1>
          <h2 className="text-center text-2xl">Sponsored By</h2>
          <SponsorCarousel />
        </div>
      )}
      <PlayerCard onSold={setIsPlayerSold} />
    </div>
  );
};

export default Page1;
