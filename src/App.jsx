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

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [prevPlayer, setPrevPlayer] = useState([]);
  const [expPlayer, setExpPlayer] = useState([]);
  const [teamswithsquad, setTeamsWithSquad] = useState([]);

  const fetchAllPlayers = async () => {
    var res = await fetchSupabaseData('CricketPlayers');
    setPlayers(res);
    var res2 = await getTeamFromTeamID(0);
  }
  const fetchAllTeams = async () => {
    var res = await fetchSupabaseData('Teams');
    setTeams(res);
  }
  const getExpensivePlayer = async () => {
    var res = await fetchExpensivePlayer();
    console.log(res);
    setExpPlayer(res);
  }
  const getPrevPlayer = async () => {
    var res = await fetchPrevPlayer();
    setPrevPlayer(res);
  }
  const getAllTeamswithplayers = async () => {
    // Usage example
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
        <Route path="/" element={<CenterComponent teamlist={teamswithsquad}/>} />
        <Route path="/teamswithsquad" element={<TeamsWithCompactDesign teamlist={teamswithsquad} />} />
      </Routes>

    </>
  )
}

export default App
