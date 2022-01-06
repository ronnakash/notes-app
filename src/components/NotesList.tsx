import Note from './Note'
import INote from '../interfaces/INote';
import AddNote from './AddNote';


const NotesList = (obj :{notes : INote[]}) => {
    let { notes } = obj;
    return (
        <div className='notes-list'>
                {notes.map((note: INote) => (
                    <Note 
                        note = {note}
                    />
                ))}
            <AddNote/>

        </div>
            
                

    );

};

export default NotesList