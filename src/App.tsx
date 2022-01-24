import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import LoginBox from './components/LoginBox';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import { AuthContext } from "./utils/authContext"
import { CookiesProvider } from 'react-cookie';
import IUser from "./interfaces/IUser";
import { useCookies } from "react-cookie";
import ISigninForm from './interfaces/ISigninForm';
import ISignupForm from './interfaces/ISignupForm';
import AuthProvider from './utils/AuthProvider';
import RegisterBox from './components/RegisterBox';
import NavBar from './components/NavBar'

const App = () => {
  
  return (
    <AuthProvider>
      <div className="App">
        <NavBar></NavBar>
        <Router>
          <Routes>
            <Route path ='/' element={<h1>Home Page</h1>} />
            <Route path ='/login' element={<LoginBox />} />
            <Route path ='/register' element={<RegisterBox />} />
            <Route path ='/notes' element={<NotesList />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
};

export default App;



