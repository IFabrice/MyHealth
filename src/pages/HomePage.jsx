import React from 'react';
import NavBar from './NavBar';
import { Container } from '@mantine/core';

const Home = () => {
  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <NavBar />
      </header>
    </Container>
  // <div>
  //   <h2>Hello, this is a test component!</h2>
  // </div>
  );
};

export default Home;
