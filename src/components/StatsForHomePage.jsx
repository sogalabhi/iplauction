import React from 'react'

export default function StatsForHomePage({ stats }) {
    return (
        <div className="my-8 mx-8 bg-[#985c01] cursor-default transform hover:scale-110 transition duration-500 rounded-2xl shadow-2xl border-2 border-white/30 p-8 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center gap-6">


                {/* Stats Container */}
                <div className="flex flex-row gap-12 items-center justify-center w-full">
                    {stats.opi != 0 && (
                        <>
                            <span className="text-lg font-semibold text-yellow-300">OPI</span>
                            <span className="text-3xl font-bold text-white">{stats.opi}</span>
                        </>
                    )}

                </div>
            </div>
        </div>

    )
}
