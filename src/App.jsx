import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamSquad from './pages/FinalSquad'
import TeamsWithSquads from './pages/FinalSquad'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TeamsWithSquads/>
    </>
  )
}

export default App
