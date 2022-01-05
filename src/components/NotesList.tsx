import Note from './Note'
import INote from '../interfaces/INote';


const NotesList = (obj :{notes : INote[]}) => {
    let { notes } = obj;
    return (
        <div className='notes-list'>
                {notes.map((note: INote) => (
                    <Note 
                        note = {note}
                    />
                ))}


        </div>
            
                

    );

};

export default NotesList