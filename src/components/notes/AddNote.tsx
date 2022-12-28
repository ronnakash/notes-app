import AuthContext from '../../utils/authContext';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';



const AddNote = (obj : {handleAddNote: Function} ) => {
	let { handleAddNote } = obj
    let {user} = useContext(AuthContext);

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

	const loginRedirect = () => {
		console.log('redirected')
	}

	const handleSaveClick = () => {
		if (!user) {
			//display not logged in error
			Swal.fire({
				title: 'You aren\'t logged in',
				text:  'Can\'t post a note without logging in first',
				icon: 'error' ,
				confirmButtonText: 'Dismiss'
			  }).then(loginRedirect);
		}
		else if (noteTitle.trim().length == 0 && noteBody.trim().length == 0) {
			//display empty note error
			Swal.fire({
				title: 'Your note is empty',
				text:  'Cannot post an empty note',
				icon: 'error' ,
				confirmButtonText: 'Dismiss'
			  })
		}
		else {
			handleAddNote(noteTitle, noteBody);
			setNoteTitle('');
			setNoteBody('');	
		}
	};



    return (
        <div className='note new'>
                <textarea className='title'
				style={{background: '#7cb1ee'}}
				rows={1}
				cols={10}
				placeholder='Title'
				value={noteTitle}
				onChange={handleTitleChange}
			></textarea>
            <textarea className='body'
				style={{background: '#7cb1ee'}}
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
				<button className='save boldTextBig' onClick={handleSaveClick}>
					Save
				</button>
			</div>
        </div>



    )

}

export default AddNote