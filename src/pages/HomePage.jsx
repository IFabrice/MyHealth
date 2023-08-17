import React from 'react';
import NavBar from './NavBar';
import { Container, Button } from '@mantine/core';
import supabase from '../lib/supabaseClient';
import PropTypes from "prop-types";

const Home = () => {
  
  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error.message);
      } else {
        // const {data} = await supabase.auth.getUser();
        // console.log(data)
        console.log('Logged out successfully.');
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const second = async () => {
    const {data: {user}} = await supabase.auth.getUser();
    console.log(user)
  }


  return (
    <Container style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header>
        <NavBar />
      </header>
      <Button onClick={logout}>log out</Button>
      <Button onClick={second}>Second</Button>
    </Container>
  );
};

export default Home;

