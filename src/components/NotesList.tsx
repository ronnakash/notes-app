import Note from './Note'
import INote from '../interfaces/INote';


const NotesList = (obj :{note : INote}) => {
    return (
        <div className='notes-list'>

                <Note       
                author = {obj.note.author}
                title = {obj.note.title}
                body = {obj.note.body}
                />


        </div>
            
                

    );

};

export default NotesList