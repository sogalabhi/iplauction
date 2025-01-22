import { useEffect, useState } from 'react'
import './App.css'
import CenterComponent from './pages/Page1/CenterComponent'
import { fetchSupabaseData } from './utils/getFromRemote'
import { fetchExpensivePlayer } from './utils/expensivePlayer';
import { fetchPrevPlayer } from './utils/previousPlayer';
import { fetchTeamsWithSquads } from './utils/teamswithplayers';
import TeamsWithCompactDesign from './pages/FinalSquad';
import { Route, Router, Routes } from 'react-router-dom';
import { getTeamFromTeamID } from './utils/getTeamfromTeamId';
import TimerPage from './pages/TimerPage';

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [prevPlayer, setPrevPlayer] = useState([]);
  const [expPlayer, setExpPlayer] = useState([]);
  const [teamswithsquad, setTeamsWithSquad] = useState([]);

  const fetchAllPlayers = async () => {
    var res = await fetchSupabaseData('CricketPlayers');
    for (let i = 0; i < res.length; i++) {
      if (res[i].currentBid == null) {
        res[i].currentBid = res[i].base_price;
      }
    }
    console.log(res);
    setPlayers(res);
    var res2 = await getTeamFromTeamID(1);
  }
  const fetchAllTeams = async () => {
    var res = await fetchSupabaseData('Teams');
    setTeams(res);
  }
  const getExpensivePlayer = async () => {
    var res = await fetchExpensivePlayer();
    setExpPlayer(res);
  }
  const getPrevPlayer = async () => {
    var res = await fetchPrevPlayer();
    setPrevPlayer(res);
  }
  const getAllTeamswithplayers = async () => {
    fetchTeamsWithSquads().then((teams) => {
      setTeamsWithSquad(teams);
    });
  }

  useEffect(() => {
    fetchAllPlayers();
    fetchAllTeams();
    getExpensivePlayer();
    getPrevPlayer();
    getAllTeamswithplayers();
  }, [])



  return (
    <>
      <Routes>
        <Route path="/" element={<CenterComponent teamlist={teamswithsquad} playersList={players} />} />
        <Route path="/teamswithsquad" element={<TeamsWithCompactDesign teamlist={teamswithsquad} />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>

    </>
  )
}

export default App
