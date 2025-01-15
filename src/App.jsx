import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CenterComponent from './pages/Page1/CenterComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CenterComponent />
    </>
  )
}

export default App
