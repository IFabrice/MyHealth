import React from 'react';
import NavBar from './NavBar';
import { Container } from '@mantine/core';

const Visits = () => {
  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <NavBar />
      </header>
    </Container>

  );
};

export default Visits;
