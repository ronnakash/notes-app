import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';

const App = () => {

  let note = new INote('me', 'title', 'body\n\n\nbody\n\n\nbody\nbody\n\n\nbody\n\n\nbody')

  const [notes, setNotes] = useState([note, note, note]);

  return (
    <div className='container' >

      <NotesList
      notes={notes}
      />
        
    </div>
  );
};

export default App;
