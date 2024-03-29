import { BsFillTrashFill } from 'react-icons/bs';
import Note from '../../interfaces/Note';


interface SavedNoteProps {
    note: Note, 
    handleDeleteNote: (id: string) => Promise<void>,
    handleEditNote : (toEdit : Note) => Promise<void>
}

const SavedNote = (props : SavedNoteProps) => {
    let { note, handleDeleteNote, handleEditNote } = props;

    const handleEdit = () => {
        note.editing = true;
        handleEditNote(note);
    }

    return (
        <div className='note saved' style={{background: note.color}}>
            <div className='note-title'>
                 <span> {note.title} </span>
            </div>
            <div className='note-body'>
                <span> {note.body} </span>
            </div>
            <div className='note-footer'>
                <span className= {note.date.updated? 'boldTextsmall' : ''}>
                    {note.date.updated? note.date.updatedAt : note.date.createdAt}
                </span>
                <div>
                <button className='save boldTextBig' onClick={handleEdit}>
					Edit
				</button>
				<BsFillTrashFill
					className='delete-icon'
					size='1.2em'
                    onClick={()=>handleDeleteNote(note.id)}
				/>
                </div>
            </div>
        </div >
    );
}

export default SavedNote