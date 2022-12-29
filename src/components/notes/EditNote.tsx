import { useState } from 'react';
import INote from '../../interfaces/Note';
import ColorPicker from './ColorPicker';

//handleAddNote -> handleChangeNote

const EditNote = (props : {note : INote, handleChangeNote: Function} ) => {
	let { note, handleChangeNote } = props;
    let { title, body, color } = note;

    const [noteTitle , setNoteTitle] = useState(title);
    const [noteBody , setNoteBody] = useState(body);
	const [noteColor, setNoteColor] = useState(color)

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
			note.color = noteColor;
			console.log('note color:'+noteColor);
			handleChangeNote(note, true);
		}
	};

    const handleCancelClick = () => {
        handleChangeNote(note, false);
    };

	const handleColorChange = (event : any) => {
		console.log(event)
		setNoteColor(event.target.value);
	};

    return (
        <div className='note new' 
			style={{background: noteColor}}
		>
			<textarea className='title'
				style={{background: noteColor}}
				rows={1}
				cols={1}
				placeholder='Title'
				value={noteTitle}
				onChange={handleTitleChange}
			/>
            <textarea className='body'
				style={{background: noteColor}}
				rows={8}
				cols={1}
				placeholder={'Type to add a body...'}
				value={noteBody}
				onChange={handleBodyChange}
			/>
            <div className='note-footer'>
				<small>
					{characterLimit+1 - noteBody.length} Remaining
				</small>
				<div className='note-footer-items'>
					<ColorPicker
						color={noteColor}
						handleChange={handleColorChange}
					/>
					<button className='cancel-button boldTextBig' onClick={handleCancelClick}>
						Cancel
					</button>
					<button className='save boldTextBig' onClick={handleSaveClick}>
						Save
					</button>
				</div>
			</div>
        </div>



    )

}

export default EditNote