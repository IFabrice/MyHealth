import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './pages/NavBar';
import DropdownMenu from './pages/DropdownMenu';
import TestResultsPage from './pages/TestResultsPage';
import VisitsPage from './pages/VisitsPage';
import { Container, Paper } from '@mantine/core'; // Import Mantine UI components

const App = () => {
  return (
    <Router>
      <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <header>
          <NavBar />
        </header>

        {/* Content Area */}
        <main style={{ flex: 1, padding: '20px', display: 'contents', justifyContent: 'center' }}>
          <Routes>
            <Route path="/test-results" element={<TestResultsPage />} />
            <Route path="/visits" element={<VisitsPage />} />
            {/* Add routes for other pages if needed */}
          </Routes>
        </main>
      </Container>
    </Router>
  );
};

export default App;
