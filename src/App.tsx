import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';


const App = () => {

  let note = new INote('me', 'title', 'body\n\n\n\n\n\nbody')

  return (
    <div className='container' >

      <NotesList
      note={note}
      />
        
    </div>
  );
};

export default App;
