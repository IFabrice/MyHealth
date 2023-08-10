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
import ProtectedRoutes from './pages/protectedRoute'
import supabase from "./lib/supabaseClient";

function App() {
  // const [user, setUser] = useState("") 
  

  async function isAuth() {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      return true;
    } else {
      return false;
    }
  } 

  // useEffect(() => {
  //   if (user_sample)  {

  //   }
  //   if (user) {
  //     let data = JSON.parse(sessionStorage.getItem(token))
  //     setToken(data)
  //   }
  // }, []) 

  return (
    
      <Routes>
        <Route
          path="/signup"
          element={<SignUp/>} 
        />

        <Route
          path='/'
          element={<LogIn/>} 
        />

        <Route element={<ProtectedRoutes isAuth={isAuth}/>} >  
          <Route
            path="/home"
            element={<Home/>} 
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
            path='/results-entry'
            element={<ResultsEntry/>}
            />
        </Route>

      </Routes>

        
        
  
  );
}

export default App
