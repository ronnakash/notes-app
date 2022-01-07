import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';


let errorNote = new INote('me', 'Default Note', 'This is a note that is shown incase fetching notes from api failed');


const parseNotesFromRequest = (body : any) => {
    let obj = JSON.parse(body);
    let docs = obj.result.docs;
    let gotNewNotes : INote[] = [];
    docs.forEach((el: any) => {
      let { author, title, body, _id, date } = el;
      let newNote = new INote(author, title, body, _id, date);
      gotNewNotes.push(newNote);
    });
    if (gotNewNotes === [])
      gotNewNotes = [errorNote];
    return gotNewNotes;
  };


  export default {parseNotesFromRequest};