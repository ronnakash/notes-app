import Note from '../../interfaces/Note';
import SavedNote from './SavedNote';
import EditNote from './EditNote';

interface NoteProps {
    note: Note,
    handleDeleteNote: (id: string) => Promise<void>,
    handleEditNote : (toEdit : Note) => Promise<void>,
    handleChangeNote : (changedNote : Note) => Promise<void> }

const NoteBase = (props : NoteProps) => {
    let { note, handleDeleteNote, handleEditNote, handleChangeNote } = props;

    const savedNote = (
        <SavedNote 
        note = {note}
        handleDeleteNote = {handleDeleteNote}
        handleEditNote = {handleEditNote}
    />
    )
    
    const editNote = (
        <EditNote 
        note = {note}
        handleChangeNote = {handleChangeNote}
    />
    )
    
    return (
        <div className='notes-container'>
            {note.editing? editNote : savedNote}
        </div >
    );
}

export default NoteBase