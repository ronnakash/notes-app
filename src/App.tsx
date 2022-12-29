import './App.css';
import NotesList from './components/notes/NotesList';
import INote from './interfaces/Note';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import LoginBox from './components/user/LoginBox';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import AuthProvider from './utils/AuthProvider';
import RegisterBox from './components/user/RegisterBox';
import NavBar from './components/nav/NavBar'
import AboutPage from './components/about/AboutPage';
import TermsPage from './components/about/TermsPage';
import PrivacyPage from './components/about/PrivacyPage';
import ProfilePage from './components/user/ProfilePage';
import * as dotenv from 'dotenv';
import HomePage from './components/HomePage';



const App = () => {
  
  return (
    <AuthProvider>
      <div className="app-container">
        <NavBar/>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/terms_of_service' element={<TermsPage/>}/>
            <Route path='/privacy' element={<PrivacyPage/>}/>
            <Route path='/login' element={<LoginBox/>} />
            <Route path='/register' element={<RegisterBox/>} />
            <Route path='/notes' element={<NotesList/>} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
};

export default App;



