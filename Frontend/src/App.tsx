import './App.css';

import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import styled from 'styled-components';
import SignUp from './pages/SignUp';

const NavLink = styled(Link)`
  margin-right: 10px;
`;
const App = () => {
  return (
    <Router>
      <NavLink to="/" className="link">
        Home
      </NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
      <NavLink to="/login" className="link">
        Log In
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};
export default App;
