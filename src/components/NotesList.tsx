import Note from './Note'
import INote from '../interfaces/INote';
import AddNote from './AddNote';
import React, { useEffect, useState } from 'react';
import API from '../utils/requests/API'
import SavedNote from './SavedNote';
import EditNote from './EditNote';
import firebase from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth';


const NotesList = () => {


    let emptyNotes : INote[] = []
  
    const [notes, setNotes] = useState(emptyNotes);
    const [user, setUser] = useState(firebase.auth.currentUser);
    
    onAuthStateChanged(firebase.auth, (newUser) => {
        if (user)
            console.log('logged in');
        else
            console.log('no user')
        setUser(newUser)
    });


    useEffect(() => {
      handleFetch();
    }, [user])
  

    const handleFetch = async () => {
      let newNotes = await API.getMyNotes(user?.displayName? user.displayName : 'guest')
      console.log(newNotes)
      setNotes(newNotes);
    }
  
    const deleteNote = (id: string) => {
      API.deleteNote(id);
          const newNotes = notes.filter((note) => note.id !== id);
          setNotes(newNotes);
      };


    const addNote = async (title : string, body : string) => {
        let author = user?.displayName? user.displayName : 'guest';
        let newNote = await API.postNote({author, title, body});
        const newNotes = newNote? [...notes, newNote] : notes;
        setNotes(newNotes);
      };

    const changeNote = async (changedNote : INote, saved : boolean) => {
        const newNotes =  await Promise.all(
            notes.map( async (note : INote) => {
                if (note.id == changedNote.id){
                    note.body = changedNote.body;
                    note.title = changedNote.title;
                    if (saved) {
                        await API.editNote(note);
                    }
                    note.editing = false;
                }
                return note;
            }));    
        setNotes(newNotes);
    };

    const editNote = (toEdit : INote) => {
        const newNotes = notes.map((note : INote) => {
            if (toEdit.id == note.id)
                note.editing = true;
            return note;
        });
        setNotes(newNotes);
    };

    return (
        
        <div className='notes-list'>
            {notes.map((note: INote) => {
                return (
                    <Note
                    note={note}
                    handleDeleteNote={deleteNote}
                    handleEditNote={editNote}
                    handleChangeNote={changeNote}
                    />
                )
                })}
            <AddNote
                handleAddNote = {addNote}
            />
        </div>
    

            
                

    );

};

export default NotesList