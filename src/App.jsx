import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/login'
import {Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const pageStyle = {
    backgroundColor: '#4090b4',
  };

  return (

    <Routes>
      <Route
        path="/login"
        element={<LogIn/>} />
    </Routes>


  );
}

export default App
