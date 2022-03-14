import './App.css';
import NotesList from './components/notes/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import LoginBox from './components/user/LoginBox';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import AuthContext from "./utils/authContext"
import { CookiesProvider } from 'react-cookie';
import IUser from "./interfaces/IUser";
import { useCookies } from "react-cookie";
import ISigninForm from './interfaces/ISigninForm';
import ISignupForm from './interfaces/ISignupForm';
import AuthProvider from './utils/AuthProvider';
import RegisterBox from './components/user/RegisterBox';
import NavBar from './components/nav/NavBar'
import AboutPage from './components/about/AboutPage';
import TermsPage from './components/about/TermsPage';
import PrivacyPage from './components/about/PrivacyPage';
import ProfilePage from './components/user/ProfilePage';
import * as dotenv from 'dotenv';



const App = () => {
  
  return (
    <AuthProvider>
      <div className="App">
        <NavBar></NavBar>
        <Router>
          <Routes>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path='/terms_of_service' element={<TermsPage/>}/>
            <Route path='/privacy' element={<PrivacyPage/>}/>
            <Route path='/' element={<h1 className='home-header'>Home Page</h1>} />
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



