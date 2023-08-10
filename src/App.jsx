import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/HomePage.jsx'
import ResultsEntry from './pages/ResultsEntry'
import {Routes, Route} from "react-router-dom";
import { Container } from '@mantine/core'
import NavBar from './pages/NavBar'
import TestResults from './pages/TestResults'
import Visits from './pages/Visits'

function App() {
  const [token, setToken] = useState(false)

  if(token) {
    sessionStorage.setItem("token", JSON.stringify(token))
  }

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      let data = JSON.parse(sessionStorage.getItem(token))
      setToken(data)
    }
  }, [])

  return (
    
      <Routes>
        {token?<Route
          path="/home"
          element={<Home/>} 
        />:""}
        <Route
          path="/signup"
          element={<SignUp/>} 
        />
        {token?<Route
          path='/test-results'
          element={<TestResults/>}
          />:""}
        {token?<Route
          path="/visits"
          element={<Visits/>} 
          />:""}

        <Route
          path='/'
          element={<LogIn token={token} setToken={setToken}/>} 
        />

        <Route
          path='/results-entry'
          element={<ResultsEntry/>}
          />
      </Routes>
  
  );
}

export default App
