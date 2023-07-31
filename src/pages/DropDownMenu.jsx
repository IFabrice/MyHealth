import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper } from '@mantine/core';
import './DropdownMenu.css';

const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Container>
      <div className={`dropdown-menu ${isActive ? 'active' : ''}`} onClick={handleMenuClick}>
      <Link to="/menu">Menu</Link>
        <Paper shadow="sm" className="menu-links">
          <Link to="/data-sharing">Data Sharing</Link>
          <Link to="/add-results">Add Results</Link>
          <Link to="/messaging">Messaging</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/settings">Settings</Link>
        </Paper>
      </div>
    </Container>
  );
};

export default DropdownMenu;