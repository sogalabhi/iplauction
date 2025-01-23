import React from 'react'

export default function StatsForHomePage({ stats }) {
    return (
        <div className="my-5 mx-5 bg-white/10 hover:bg-white/5 cursor-default hover:scale-105 transition backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-4">
            <div className="flex flex-row gap-7 items-center justify-center">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">Matches:</span>
                    <span>{stats.stat1}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">Wickets:</span>
                    <span>{stats.stat2}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">Economy:</span>
                    <span>{stats.stat3}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">Strike Rate:</span>
                    <span>{stats.stat4}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs font-semibold">Runs:</span>
                    <span>{stats.stat1}</span>
                </div>
            </div>
        </div>
    )
}
