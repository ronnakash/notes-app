import { BsFillTrashFill } from 'react-icons/bs';
import INote from '../../interfaces/INote';
import SavedNote from './SavedNote';
import EditNote from './EditNote';



const Note = (props : {note: INote,
    handleDeleteNote: Function,
    handleEditNote : Function,
    handleChangeNote : Function }) => {
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

    const thisNote = note.editing? editNote : savedNote

    return (
        <div className='notes-container'>
            {thisNote}
        </div >
    );
}

export default Note