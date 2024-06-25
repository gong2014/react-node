import './App.css';

import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import styled from 'styled-components';

const NavLink = styled(Link)`
  margin-right: 10px;
`;

const App = () => {
  return (
    <Router>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/login" className="link">
        login
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
