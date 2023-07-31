import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/HomePage.jsx'
import {Routes, Route} from "react-router-dom";
import { Container } from '@mantine/core'
import NavBar from './pages/NavBar'
import TestResults from './pages/TestResults'
import Visits from './pages/Visits'

function App() {
  const [count, setCount] = useState(0)

  const pageStyle = {
    backgroundColor: '#4090b4',
  };

  return (
    

      <Routes>
        <Route
          path="/"
          element={<Home/>}  
        />
        <Route
          path="/signup"
          element={<SignUp/>} 
        />
        <Route
          path='/test-results'
          element={<TestResults/>} 
        />
        <Route
          path="/visits"
          element={<Visits/>} 
        />
        <Route
          path='/login'
          element={<LogIn/>} 
        />
      </Routes>
  


  );
}

export default App
