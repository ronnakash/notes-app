import Note from './Note'
import INote from '../../interfaces/Note';
import AddNote from './AddNote';
import React, { useContext, useEffect, useState } from 'react';
import API from '../../utils/requests/API'
import SavedNote from './SavedNote';
import EditNote from './EditNote';
import IUser from '../../interfaces/User';
import AuthContext from '../../utils/authContext';
import Swal from 'sweetalert2';


const NotesList = () => {

    let {user} = useContext(AuthContext);
    let emptyNotes : INote[] = []
  
    const [notes, setNotes] = useState(emptyNotes);


    useEffect(() => {
      handleFetch();
    }, [])
  

    const handleFetch = async () => {
        if (!user) {
            return;
        }
        let newNotes = await API.getMyNotes(user?.email? user.email : 'guest', user)
        setNotes(newNotes);
    }
  
    const deleteNote = async (id: string) : Promise<void> => {
        //warning message
        Swal.fire({
            title: 'Are you sure you want to delete this note?',
            showDenyButton: true,
            // showCancelButton: true,
            denyButtonText: `delete`,
            confirmButtonText: `Don't delete`,
          }).then((result) => {
            if (!result.isConfirmed) {
                API.deleteNote(id, user);
                const newNotes = notes.filter((note) => note.id !== id);
                setNotes(newNotes);
            }
          })
          
      
      };

    const addNote = async (title : string, body : string) : Promise<void> => {
        let author = user?.email? user.email : 'guest';
        let newNote = await API.postNote({author, title, body}, user);
        const newNotes = newNote? [...notes, newNote] : notes;
        setNotes(newNotes);
      };

    const changeNote = async (changedNote : INote) : Promise<void> => {
        const newNotes = await Promise.all(
            notes.map( async (note : INote) => {
                if (note.id === changedNote.id)
                    note = await API.editNote(changedNote, user);
                return note;
            }));    
        setNotes(newNotes);
    };

    const editNote = async (toEdit : INote) : Promise<void> => {
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
                    <Note 
                        key={note.id}
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