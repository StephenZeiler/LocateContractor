import React from 'react';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import BusinessPage from './Pages/BusinessPage';
import PersonalPage from './Pages/PersonalPage';
import './App.css';
import { Link, BrowserRouter as Router, Route, BrowserRouter, Routes, } from 'react-router-dom';
import styled from 'styled-components';
import PersonalIcon from './NavBar/PersonalIcon';
import BusinessIcon from './NavBar/BusinessIcon';
import HomeIcon from './NavBar/HomeIcon';
import LoginIcon from './NavBar/LoginIcon';


function App() {

  return (
    <BrowserRouter>
      <div>
        <HomeIcon></HomeIcon>
        <LoginIcon></LoginIcon>
        <PersonalIcon></PersonalIcon>
        <BusinessIcon></BusinessIcon>
      </div>
      <switch>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Business" element={<BusinessPage />} />
          <Route path="/Personal" element={<PersonalPage />} />
        </Routes>
      </switch>
    </BrowserRouter>
  );
};

export default App;
