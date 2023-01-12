import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/Note';
import IUser from '../../interfaces/User';
import Swal from 'sweetalert2'



const parseNotesFromRequest = (res : any) : INote[] => {
    let obj = JSON.parse(res);
    let docs = obj.models;
    let gotNewNotes : INote[] = [];
    docs.forEach((el: any) => {
      let { author, title, body, _id, color, createdAt, updatedAt } = el;
      let newNote = new INote(author, title, body, _id, createdAt, updatedAt, color);
      gotNewNotes.push(newNote);
    });
    return gotNewNotes;
  };

  const parseNoteFromPostRequest = (res : any) : INote => {
    let obj = JSON.parse(res);
    let {author, title, body, _id, createdAt, updatedAt, color} = obj.model;
    return new INote(author, title, body, _id, createdAt, updatedAt, color);
  };

  const parseNoteFromUpdateRequest = (res : any) : INote => {
    let obj = JSON.parse(res);
    let {author, title, body, _id, createdAt, updatedAt, color} = obj.updated;
    return new INote(author, title, body, _id, createdAt, updatedAt, color);
  };


  const parseUserFromLoginRequest = (res : any) : IUser | undefined => {
    const user = parseUserFromRequest(res);
    return user;
  }

  const parseUserFromRegisterRequest = (res : any) : IUser | undefined => {
    const user = parseUserFromRequest(res);
    return user;
  }

  const parseUserFromUpdateRequest = (res : any) : IUser | undefined => {
    let obj = JSON.parse(res);
    let {updated} = obj;
    if (updated) {
      Swal.fire({
        title: 'Updated User',
        text:  `Updated user ${updated.username} successfully`,
        icon: 'success' ,
        confirmButtonText: 'Ok'
      })
    }
    return updated;
  }

  const parseUserFromRequest = (res : any) : IUser | undefined => {
    let obj = JSON.parse(res);
    let {token, user} = obj;
    if (token && user) {
      let {_id ,username, email, permissions, picture} = user;
      return new IUser(_id, username, email, 'Bearer ' + token, permissions, picture);
    }
    else {
      if (obj.message.startsWith('E11000 duplicate key error collection'))
        throw new Error("Email is already in use. Please try a different one")
    }
  }

  export default {parseNotesFromRequest, parseNoteFromUpdateRequest, parseNoteFromPostRequest, parseUserFromLoginRequest, parseUserFromRegisterRequest, parseUserFromUpdateRequest};