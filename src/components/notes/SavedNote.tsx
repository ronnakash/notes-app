import { BsFillTrashFill } from 'react-icons/bs';
import INote from '../../interfaces/INote';




const SavedNote = (props : {note: INote, handleDeleteNote: Function, handleEditNote: Function}) => {
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
                <span>{note.date}</span>
                <div>
                <button className='save' onClick={handleEdit}>
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