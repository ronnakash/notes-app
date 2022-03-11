import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import IUser from '../../interfaces/IUser';
import Swal from 'sweetalert2'



let errorNote = new INote('me', 'Default Note', 'This is a note that is shown incase fetching notes from api failed', '1');


const parseNotesFromRequest = (res : any) => {
  console.log("res");
  console.log(res)
    let obj = JSON.parse(res);
    console.log(obj)   
    let docs = obj.result.models;
    let gotNewNotes : INote[] = [];
    docs.forEach((el: any) => {
      let { author, title, body, _id, createdAt, updatedAt } = el;
      let newNote = new INote(author, title, body, _id, createdAt, updatedAt);
      gotNewNotes.push(newNote);
    });
    if (gotNewNotes === [])
      gotNewNotes = [errorNote];
    return gotNewNotes;
  };

  const parseNoteFromPostRequest = (res : any) : INote => {
    let obj = JSON.parse(res);
    let {author, title, body, _id, createdAt, updatedAt} = obj.result.newNote;
    return new INote(author, title, body, _id, createdAt, updatedAt);
  };

  const parseUserFromRequest = (res : any) : IUser | undefined => {
    console.log("user login response");
    console.log(res)
    let obj = JSON.parse(res);
    console.log(obj)
    if (!obj.result) {
      console.log('error!!!/n/n/n')
      Swal.fire({
        title: 'Error!',
        text: obj.message || 'Unknown Error while fetching user from server',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
    else{
      let {token, user} = obj.result;
      let {_id ,username, email, permissions, picture} = user;
      console.log("parsing")
      console.log(user);
      console.log(token)
      return new IUser(_id, username, email, 'Bearer ' + token, permissions, picture);
    }

  }

  export default {parseNotesFromRequest, parseNoteFromPostRequest, parseUserFromRequest};