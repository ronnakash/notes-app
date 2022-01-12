import { useState } from 'react';
import INote from '../interfaces/INote';

//handleAddNote -> handleChangeNote

const EditNote = (obj : {note : INote, handleChangeNote: Function} ) => {
	let { note, handleChangeNote } = obj;
    let { title, body } = note;

    const [noteTitle , setNoteTitle] = useState(title);
    const [noteBody , setNoteBody] = useState(body);

	const characterLimit = 499;


	const handleBodyChange = (event : any) => {
			setNoteBody(event.target.value
				.substring(0,Math.min(characterLimit, event.target.value.length)+1))
    };


    const handleTitleChange = (event : any) => {
        setNoteTitle(event.target.value);
    };


	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0 || noteBody.trim().length > 0) {
            note.title = noteTitle;
            note.body = noteBody;
			handleChangeNote(note, true);
		}
	};

    const handleCancelClick = () => {
        note.title = title;
        note.body = body;
        handleChangeNote(note, false);
    };

    return (
        <div className='note new'>
                <textarea className='title'
				rows={1}
				cols={10}
				placeholder='Title'
				value={noteTitle}
				onChange={handleTitleChange}
			></textarea>
            <textarea className='body'
				rows={12}
				cols={10}
				placeholder={'Type to add a body...'}
				value={noteBody}
				onChange={handleBodyChange}
			></textarea>
            <div className='note-footer'>
				<small>
					{characterLimit+1 - noteBody.length} Remaining
				</small>
                <button className='save' onClick={handleCancelClick}>
					Cancel
				</button>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
        </div>



    )

}

export default EditNote