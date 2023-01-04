import { BsFillTrashFill } from 'react-icons/bs';
import Note from '../../interfaces/Note';
import SavedNote from './SavedNote';
import EditNote from './EditNote';

interface NoteProps {
    note: Note,
    handleDeleteNote: Function,
    handleEditNote : Function,
    handleChangeNote : Function }

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