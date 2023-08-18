import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import LogIn from './pages/login.jsx';
import './styles/index.css';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
