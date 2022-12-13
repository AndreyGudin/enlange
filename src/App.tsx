import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Welcome } from './pages/Welcome/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
    </>
  )
}

export default App
