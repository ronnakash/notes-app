import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState, useMemo, useContext } from 'react';
import requests from './utils/requests/requests'
import axios, {AxiosResponse}from 'axios';
import API from './utils/requests/API'
import firebaseui from 'firebaseui';
import auth from './utils/firebase'
import  StyledFirebaseUi  from 'react-firebaseui/StyledFirebaseAuth';
import LoginBox from './components/LoginBox';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import { AuthContext } from "./utils/AuthContext"
import { CookiesProvider } from 'react-cookie';
import IUser from "./interfaces/IUser";
import { useCookies } from "react-cookie";
import ISigninForm from './interfaces/ISigninForm';
import ISignupForm from './interfaces/ISignupForm';
import AuthProvider from './utils/AuthProvider';


const App = () => {
  

  return (
    <AuthProvider>
      <div className="App">
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            <img  src={logo} height='40px'/>
            NotesApp
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/notes'>Notes</Nav.Link>
            <NavDropdown title='Dropdown'>
              <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
              <NavDropdown.Item href='/notes'>Notes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Router>
          <Routes>
            <Route path ='/' element={<h1>Home Page</h1>} />
            <Route path ='/login' element={<LoginBox />} />
            <Route path ='/notes' element={<NotesList />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>

  );
};

export default App;



