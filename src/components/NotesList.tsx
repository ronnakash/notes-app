import Note from './Note'
import INote from '../interfaces/INote';
import AddNote from './AddNote';
import React, { useContext, useEffect, useState } from 'react';
import API from '../utils/requests/API'
import SavedNote from './SavedNote';
import EditNote from './EditNote';
import IUser from '../interfaces/IUser';
import AuthContext from '../utils/authContext';


const NotesList = () => {

    let {user, signIn} = useContext(AuthContext);
    let emptyNotes : INote[] = []
  
    const [notes, setNotes] = useState(emptyNotes);


    useEffect(() => {
      handleFetch();
    }, [])
  

    const handleFetch = async () => {
        if (!user) {

        }
        console.log(user);
        let newNotes = await API.getMyNotes(user?.username? user.username : 'guest', user)
        console.log(newNotes)
        setNotes(newNotes);
    }
  
    const deleteNote = (id: string) => {
      API.deleteNote(id, user);
          const newNotes = notes.filter((note) => note.id !== id);
          setNotes(newNotes);
      };

    const addNote = async (title : string, body : string) => {
        let author = user?.username? user.username : 'guest';
        let newNote = await API.postNote({author, title, body}, user);
        const newNotes = newNote? [...notes, newNote] : notes;
        setNotes(newNotes);
      };

    const changeNote = async (changedNote : INote, saved : boolean) => {
        const newNotes = await Promise.all(
            notes.map( async (note : INote) => {
                if (note.id === changedNote.id){
                    note.body = changedNote.body;
                    note.title = changedNote.title;
                    if (saved) {
                        await API.editNote(note, user);
                    }
                    note.editing = false;
                }
                return note;
            }));    
        setNotes(newNotes);
    };

    const editNote = (toEdit : INote) => {
        const newNotes = notes.map((note : INote) => {
            if (toEdit.id === note.id)
                note.editing = true;
            return note;
        });
        setNotes(newNotes);
    };

    return (
        
        <div className='notes-list'>
            {notes.map((note: INote) => {
                return (
                    <Note key={note.id}
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