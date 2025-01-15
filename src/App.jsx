import { useEffect, useState } from 'react'
import './App.css'
import CenterComponent from './pages/Page1/CenterComponent'
import { fetchSupabaseData } from './utils/getFromRemote'
import { fetchExpensivePlayer } from './utils/expensivePlayer';
import { fetchPrevPlayer } from './utils/previousPlayer';
import TeamSquad from './pages/FinalSquad'
import TeamsWithSquads from './pages/FinalSquad'
import { fetchTeamsWithSquads } from './utils/teamswithplayers
import TeamsWithCompactDesign from './pages/FinalSquad';

function App() {
  const [players, setPlayers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [prevPlayer, setPrevPlayer] = useState([]);
  const [expPlayer, setExpPlayer] = useState([]);
  const [teamswithsquad, setTeamsWithSquad] = useState([]);

  const fetchAllPlayers = async () => {
    var res = await fetchSupabaseData('CricketPlayers');
    setPlayers(res);
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
      <CenterComponent />
      < TeamsWithCompactDesign teamlist={teamswithsquad}/>
    </>
  )
}

export default App
