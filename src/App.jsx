import { useState } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)

  return (
    <>
    {!isLoggedIn &&<Login setLoggedIn={setLoggedIn}></Login> }
    {isLoggedIn &&<Dashboard></Dashboard>}
    </>
  )
}

export default App
