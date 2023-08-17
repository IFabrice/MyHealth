import './App.css'
import LogIn from './pages/login'
import SignUp from './pages/signup'
import Home from './pages/HomePage.jsx'
import ResultsEntry from './pages/ResultsEntry'
import {Routes, Route} from "react-router-dom";
import TestResults from './pages/TestResults'
import Visits from './pages/Visits'
import ProtectedRoutes from './pages/protectedRoute'
import { AuthContextProvider, AuthContext, useUser} from './lib/authContext'

function App() {

  return (
    <AuthContextProvider> 
      <Routes>
        <Route
          path="/signup"
          element={<SignUp/>} 
        />

        <Route
          path='/login'
          element={<LogIn/>} 
        />

        <Route element={<ProtectedRoutes/>} >  
          <Route
            path="/"
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
    </AuthContextProvider>  
  
  );
}

export default App
