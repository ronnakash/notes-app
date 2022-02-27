import { useState } from 'react';



const AddNote = (obj : {handleAddNote: Function} ) => {
	let { handleAddNote } = obj

    const [noteTitle , setNoteTitle] = useState('');
    const [noteBody , setNoteBody] = useState('');

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
				rows={8}
				cols={10}
				placeholder={'Type to add a body...'}
				value={noteBody}
				onChange={handleBodyChange}
			></textarea>
            <div className='note-footer'>
				<small>
					{characterLimit+1 - noteBody.length} Remaining
				</small>
				<button className='save' onClick={handleSaveClick}>
					Save
				</button>
			</div>
        </div>



    )

}

export default AddNote