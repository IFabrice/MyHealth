import React from 'react';
import NavBar from './NavBar';
import { Container } from '@mantine/core';
import "./TestResults.css";

const TestResults = () => {
  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <NavBar />
      </header>

      <div>
        <h3 className='title1'>Test Results</h3>

      </div>
    </Container>
  );
};

export default TestResults;
