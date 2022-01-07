import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios'
import requestParser from './utils/requests/requestParser'
import requests from './utils/requests/requests'

const App = () => {


  let startNote = new INote('me', 'Note', 'Default note that is shown on app startup');





  const emptyNotes : INote[] = [startNote]

  const handleFetch = async () => {

    /** Get notes from server */
    
    await requests.getAllNotesRequest.get('')
      .then((response : any) => {
        let newNotes = response.data;
        setNotes(newNotes)
      })
      .catch((error: Error) => console.log(error));
    /*
    let gotDocs = ((result)? result.data.result.docs : [] )
    console.log(result? result.data : 'error');
    let gotNewNotes : INote[] = [];
    gotDocs.forEach((el: any) => {
      console.log(el);
      let { author, title, body, _id, date } = el;
      let newNote = new INote(author, title, body, _id, date);
      console.log(newNote);
      gotNewNotes.push(newNote);
    });
    if (gotNewNotes === [])
      gotNewNotes = [errorNote];
    */
    
    
  }





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
        
      <button className='fetch' onClick={handleFetch}>
        fetch from db
      </button>
    </div>
  );
};

export default App;
