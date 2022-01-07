import logo from './logo.svg';
import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';
import axios, {AxiosResponse} from 'axios'

const App = () => {

  const parseNotesFromRequest = (body : any) => {
    let obj = JSON.parse(body);
    let docs = obj.result.docs;
    let gotNewNotes : INote[] = [];
    docs.forEach((el: any) => {
      let { author, title, body, _id, date } = el;
      let newNote = new INote(author, title, body, _id, date);
      gotNewNotes.push(newNote);
    });
    if (gotNewNotes === [])
      gotNewNotes = [errorNote];
    return gotNewNotes;
  };

  let errorNote = new INote('me', 'Default Note', 'This is a note that is shown incase fetching notes from api failed');

  let startNote = new INote('me', 'Note', 'Default note that is shown on app startup');

  let serverURL = 'http://localhost:4000';
  let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';

  const APIgetNotes = axios.create({
    baseURL: serverURL, 
    headers: {
      Authorization: token
    }, 
    transformResponse: [parseNotesFromRequest] 
  
  });


  const emptyNotes : INote[] = [startNote]

  const handleFetch = async () => {

    /** Get notes from server */
    
    await APIgetNotes.get('/Admin/notes/Admin/get/allNotes')
      .then((response : any) => {
        let newNotes = response.data;
        setNotes(newNotes)
      })
      .catch(error => console.log(error));
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
