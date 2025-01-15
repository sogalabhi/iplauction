import { useEffect, useState } from 'react'
import './App.css'
import CenterComponent from './pages/Page1/CenterComponent'
import { fetchSupabaseData } from './utils/getFromRemote'
import { fetchExpensivePlayer } from './utils/expensivePlayer';
import { fetchPrevPlayer } from './utils/previousPlayer';
import TeamsWithCompactDesign from './pages/FinalSquad';

function App() {
  const [players, setplayers] = useState([]);

  const fetchAllPlayers = async () => {
    var res = await fetchSupabaseData('CricketPlayers');
    setplayers(res);
  }
  const fetchAllTeams = async () => {
    var res = await fetchSupabaseData('Teams');
    setplayers(res);
  }
  const getExpensivePlayer = async () => {
    var res = await fetchExpensivePlayer();
    setplayers(res);
  }
  const getPrevPlayer = async () => {
    var res = await fetchPrevPlayer();
    setplayers(res);
    console.log(res);
  }

  useEffect(() => {
    fetchAllPlayers();
    fetchAllTeams();
    getExpensivePlayer();
    getPrevPlayer();
  }, [])

  return (
    <>
      <CenterComponent />
      < TeamsWithCompactDesign/>
    </>
  )
}

export default App
