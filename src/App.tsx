import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';
import requests from './utils/requests/requests'
import axios, {AxiosResponse}from 'axios';
import API from './utils/requests/API'


const App = () => {

  return (
    <div className='container' >
      <NotesList
      />
    </div>
  );
};

export default App;
