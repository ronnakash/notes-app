import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/Note';
import IUser from '../../interfaces/User';
import Swal from 'sweetalert2'



const parseNotesFromRequest = (res : any) : INote[] => {
  console.log("res");
  console.log(res)
    let obj = JSON.parse(res);
    console.log(obj)   
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
    let {author, title, body, _id, createdAt, updatedAt, color} = obj.newNote;
    return new INote(author, title, body, _id, createdAt, updatedAt, color);
  };

  const parseNoteFromUpdateRequest = (res : any) : INote => {
    let obj = JSON.parse(res);
    let {author, title, body, _id, createdAt, updatedAt, color} = obj.updated;
    return new INote(author, title, body, _id, createdAt, updatedAt, color);
  };


  const parseUserFromLoginRequest = (res : any) : IUser | undefined => {
    const user = parseUserFromRequest(res);
    // console.log("user login response");
    return user;
  }

  const parseUserFromRegisterRequest = (res : any) : IUser | undefined => {
    const user = parseUserFromRequest(res);
    // console.log("user register response");
    return user;
  }

  const parseUserFromUpdateRequest = (res : any) : IUser | undefined => {
    console.log(res)
    let obj = JSON.parse(res);
    console.log(obj)
    let {user} = obj;
    console.log("user update response");
    console.log(user);
    if (user) {
      Swal.fire({
        title: 'Updated User',
        text:  `Updated user ${user.username} successfully`,
        icon: 'success' ,
        confirmButtonText: 'Ok'
      })
    }
    return user;
  }

  const parseUserFromRequest = (res : any) : IUser | undefined => {
    console.log(res)
    let obj = JSON.parse(res);
    console.log(obj)
    let {token, user} = obj;
    if (token && user) {
      let {_id ,username, email, permissions, picture} = user;
      console.log("parsing")
      console.log(user);
      console.log(token)
      return new IUser(_id, username, email, 'Bearer ' + token, permissions, picture);
    }
    else {
      if (obj.message.startsWith('E11000 duplicate key error collection'))
        throw new Error("Email is already in use. Please try a different one")
    }
  }

  export default {parseNotesFromRequest, parseNoteFromUpdateRequest, parseNoteFromPostRequest, parseUserFromLoginRequest, parseUserFromRegisterRequest, parseUserFromUpdateRequest};