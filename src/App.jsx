import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './pages/login'

function App() {
  const [count, setCount] = useState(0)

  const pageStyle = {
    backgroundColor: '#4090b4',
  };

  return (
    <dev styel="pageStyle">
      <LogIn/>
    </dev>
  );
}

export default App
