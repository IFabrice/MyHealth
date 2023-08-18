// NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Paper, Button, useMantineTheme, Group } from '@mantine/core';
import '../styles/NavBar.css';

const NavBar = () => {
  const theme = useMantineTheme();
  const [dropdownOpened, setDropdownOpened] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpened((prev) => !prev);
  };

  return (
    <Container size="lg">
      <Paper shadow="sm" padding="md" radius="md" className="navbar-container">
        <div className="navbar">
          {/* Home Button */}
          <Link to="/" className="navbar-link">
            Home
          </Link>

          {/* Test Results and Visits */}
          <div className="navbar-links">
            <Link to="/test-results" className="navbar-link">
              Test Results
            </Link>
            <Link to="/visits" className="navbar-link">
              Visits
            </Link>
          </div>

          {/* Menu Button */}
          <Button
            variant="link"
            color="gray"
            className="button-link"
            onClick={handleDropdownToggle}
          >
            Menu
          </Button>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpened && (
          <div className="dropdown-menu">
            <Group direction="column">
              <Link to="/data-sharing" className="dropdown-link">
                Data Sharing
              </Link>
              <Link to="/add-results" className="dropdown-link">
                Add Results
              </Link>
              <Link to="/messaging" className="dropdown-link">
                Messaging
              </Link>
              <Link to="/insights" className="dropdown-link">
                Insights
              </Link>
              <Link to="/settings" className="dropdown-link">
                Settings
              </Link>
              <Link to="/logout" className="dropdown-link">
                Logout
              </Link>
            </Group>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default NavBar;
