import './App.css';
import NotesList from './components/NotesList';
import INote from './interfaces/INote';
import React, { useEffect, useState } from 'react';
import requests from './utils/requests/requests'
import axios, {AxiosResponse}from 'axios';
import API from './utils/requests/API'


const App = () => {

  let startNote = new INote('me', 'Note', 'Default note that is shown on app startup');
  const emptyNotes : INote[] = [startNote]


  const [notes, setNotes] = useState(emptyNotes);


  const handleFetch = async () => {
    /*
    await requests.
      getAllNotesRequest
      .get('')
      .then((response : AxiosResponse) => {
        let newNotes = response.data;
        setNotes(newNotes)
      })
      .catch((error: Error) => console.log(error));
    */
    let newNotes = await API.getAllNotes()
    console.log("fetch")
    console.log(newNotes)
    setNotes(newNotes);

  }

  const deleteNote = (id: string) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

  const addNote = async (title : string, body : string) => {
    /*await requests
      .postNoteRequest(newNote)
      .post('')
      .then((response : AxiosResponse) => {
        if (response.status === 200)
          console.log('posted note');
        else
          throw new Error("post note request failed");
      })
      .catch((error: Error) => console.log(error));
      


      let newNote;
      axios.post('http://localhost:4000/Admin/notes/post/note',{
        
        author: 'Admin5',
        title: title,
        body: body
    }, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU'
        }
      }).then(res => {

      }).catch

    const newNotes = newNote? [...notes, newNote] : notes;
    setNotes(newNotes);

    */
    let author = 'Admin5';
    let newNote = await API.postNote({author, title, body});
    const newNotes = newNote? [...notes, newNote] : notes;
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
