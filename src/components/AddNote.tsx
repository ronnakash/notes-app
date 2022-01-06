import { title } from 'process';
import { useState } from 'react';



const AddNote = (obj : {handleAddNote: Function} ) => {
	let { handleAddNote} = obj


    const [noteTitle , setNoteTitle] = useState('');
    const characterLimit = 500;


    const [noteBody , setNoteBody] = useState('');



	const handleBodyChange = (event : any) => {
        if (characterLimit - event.target.value.length >= 0) 
        setNoteBody(event.target.value);
    };

    const handleTitleChange = (event : any) => {
        setNoteTitle(event.target.value);
    };


	

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0 || noteBody.trim().length > 0) {
			handleAddNote(noteTitle, noteBody);
			setNoteTitle('');
            setNoteBody('');
		}
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
					{characterLimit - noteBody.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
        </div>



    )

}

export default AddNote