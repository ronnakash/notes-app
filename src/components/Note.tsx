import { BsFillTrashFill } from 'react-icons/bs';
import INote from '../interfaces/INote';


const Note = (note : {author: string, title: string, body: string }) => {
    let newNote = new INote(note.author, note.title, note.body);
    return (
        <div className='note'>
            <div className='title'>
                 <span> {newNote.title} </span>
            </div>
           
            <span> {newNote.body} </span>
            <div className='note-footer'>
                <span>{newNote.date}</span>
				<BsFillTrashFill
					//onClick={() => handleDeleteNote(note. id)}
					className='delete-icon'
					size='1.2em'
				/>


            </div>




        </div >);
}

export default Note