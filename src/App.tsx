import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';
import requests from './utils/requests/requests'
import axios, {AxiosResponse}from 'axios';
import API from './utils/requests/API'
import firebaseui from 'firebaseui';
import auth from './utils/firebase'
import  StyledFirebaseUi  from 'react-firebaseui/StyledFirebaseAuth';
import LoginBox from './components/LoginBox';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';



const App = () => {



  return (
    <div className="app">
      <Router>
      <Navbar />
        <Routes>
          <Route path ='/' element={<h1>Home Page</h1>} />
          <Route path ='/login' element={<LoginBox/>} />
          <Route path ='/notes' element={<NotesList/>} />
        </Routes>
        <div className="list">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="login">login</Link></li>
            <li><Link to="notes">notes</Link></li>
          </ul>
        </div>
      </Router>
    </div>
  );
};

export default App;



