import Note from './Note'
import INote from '../interfaces/INote';
import AddNote from './AddNote';


const NotesList = (obj :{notes : INote[], handleAddNote : Function, handleDeleteNote : Function}) => {
    let { notes, handleAddNote, handleDeleteNote } = obj;


    return (
        <div className='notes-list'>
                {notes.map((note: INote) => (
                    <Note 
                        key={note.id}
                        note = {note}
                        handleDeleteNote = {handleDeleteNote}
                    />
                ))}
            <AddNote
            handleAddNote = {handleAddNote}
            />

        </div>
            
                

    );

};

export default NotesList