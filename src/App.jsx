import { useEffect, useState } from 'react'
import './App.css'
import { fetchSupabaseData } from './utils/getFromRemote'
import { fetchExpensivePlayer } from './utils/expensivePlayer';
import { fetchPrevPlayer } from './utils/previousPlayer';


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

    </>
  )
}

export default App
