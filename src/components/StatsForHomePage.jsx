import React from 'react'

export default function StatsForHomePage({ stats }) {
    return (
        <div className="my-5 mx-5 bg-white/10 hover:bg-white/5 cursor-default hover:scale-105 transition backdrop-blur-md rounded-lg shadow-lg border border-white/20 p-4">
            <div className="flex flex-row gap-7 items-center justify-center">
                {stats.matches != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Matches</span>
                    <span>{stats.matches}</span>
                </div>}
                {stats.runs != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Runs</span>
                    <span>{stats.runs}</span>
                </div>}
                {stats.bat_avg != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Bat Avg</span>
                    <span>{stats.bat_avg}</span>
                </div>}
                {stats.sr != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">SR</span>
                    <span>{stats.sr}</span>
                </div>}
                {stats.catches != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Catches</span>
                    <span>{stats.catches}</span>
                </div>}
                {stats.stumpings != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Stumpings</span>
                    <span>{stats.stumpings}</span>
                </div>}
                {stats.wickets != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Wickets</span>
                    <span>{stats.wickets}</span>
                </div>}
                {stats.bowl_avg != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Bowl Avg.</span>
                    <span>{stats.bowl_avg}</span>
                </div>}
                {stats.eco != 0 && <div className="flex flex-col">
                    <span className="text-xs font-semibold">Economy</span>
                    <span>{stats.eco}</span>
                </div>}
            </div>
        </div>
    )
}
