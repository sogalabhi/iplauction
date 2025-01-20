import React from 'react'
import { Link } from 'react-router-dom';

export default function BottomButtons({ isPlayerSold, setIsPlayerSold, currentIndex, showPlayerCard, players, setPlayers, setCurrentIndex, setShowPlayerCard }) {

    const markAsSold = () => {
        setShowHammer(true);
        setTimeout(() => {
            setShowHammer(false);
            setShowPlayerCard(true);
            setIsPlayerSold(true);
        }, 2000);
    };


    const nextPlayer = () => {
        setShowPlayerCard(false);
        setIsPlayerSold(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % players.length);
    };

    const handleBid = () => {
        setPlayers((prevPlayers) =>
            prevPlayers.map((player, index) => {
                if (index === currentIndex) {
                    let newBid = player.currentBid;
                    if (newBid < 10000000) {
                        newBid += 1000000;
                    } else if (newBid < 50000000) {
                        newBid += 2000000;
                    } else {
                        newBid += 5000000;
                    }
                    return { ...player, currentBid: newBid };
                }
                return player;
            })
        );
    };

    return (
        <div>
            {
                !isPlayerSold && !showPlayerCard && (
                    <div className="text-center flex gap-4 justify-center py-2">
                        <button
                            onClick={markAsSold}
                            className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Mark as Sold
                        </button>
                        <Link
                            to={"/teamswithsquad"}
                            className="flexw-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Team Squad
                        </Link>
                        <button
                            onClick={nextPlayer}
                            className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Mark as Unsold
                        </button>
                        <button
                            onClick={handleBid}
                            className="w-36 h-12 max-w-xs bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                            Bid
                        </button>
                    </div>
                )
            }

            {
                showPlayerCard && (
                    <div className="flex flex-col items-center">
                        {isPlayerSold && (
                            <Confett width={window.innerWidth} height={window.innerHeight} />
                        )}
                        <h1 className="text-4xl py-8">🎉 Player Sold 🎉</h1>
                        <PlayerCard
                            key={currentIndex}
                            player={players[currentIndex]}
                            onSold={setIsPlayerSold}
                        />
                        <div className="text-center mt-4">
                            <button
                                onClick={nextPlayer}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Next Player
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
