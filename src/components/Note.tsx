import { BsFillTrashFill } from 'react-icons/bs';
import INote from '../interfaces/INote';




const Note = (obj : {note: INote}) => {
    let {note} = obj
    return (
        <div className='note'>
            <div className='note-title'>
                 <span> {note.title} </span>
            </div>
            <div className='note-body'>
                <span> {note.body} </span>
            </div>
            <div className='note-footer'>
                <span>{note.date}</span>
				<BsFillTrashFill
					//onClick={() => handleDeleteNote(note. id)}
					className='delete-icon'
					size='1.2em'
				/>


            </div>




        </div >);
}

export default Note