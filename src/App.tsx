import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';

const App = () => {

  //let note = new INote('me', 'title', 'body\n\n\nbody\n\n\nbody\nbody\n\n\nbody\n\n\nbody')

  const emptyNotes : INote[] = []

  const [notes, setNotes] = useState(emptyNotes);

  const deleteNote = (id: string) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  const addNote = (title : string, body : string) => {
    let newNote = new INote('Admin5', title, body);
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }


  return (
    <div className='container' >

      <NotesList
      notes={notes}
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
        
    </div>
  );
};

export default App;
