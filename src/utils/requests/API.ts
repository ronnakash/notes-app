import { AxiosResponse } from 'axios';
import INote from '../../interfaces/INote';
import IUser from '../../interfaces/IUser'
import requests from './requests'
import firebase from '../firebase'
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';


const getToken = async () => {
    if (firebase.auth.currentUser){
      let token = "Bearer " + (await firebase.auth.currentUser?.getIdToken(true).catch(e=> ""));
      return token;
    }
    return "";
  }

  const getHeader = async () => {
    let token = await getToken();
    return token? {Authorization: token} : {Authorization: "Bearer"};
  }


const getAllNotes = async () : Promise<INote[]> => {
    let res : INote[] = [];
    let headers = await getHeader();
    await requests.getAllNotesRequest
        .get('', {headers: headers})
        .then((response : AxiosResponse)=> {
            console.log(response.data)
            res = response.data;
        })
        .catch(error => console.log(error))
        //console.log(res);
    return res;
};

const getMyNotes = async (username : string) : Promise<INote[]> => {
    let res : INote[] = [];
    let headers = await getHeader();
    await requests.getMyNotesRequest
        .get('', {
            params: {author: username},
            headers: headers
        })
        .then((response : AxiosResponse)=> {
            console.log(response.data)
            res = response.data;
        })
        .catch(error => console.log(error))
        //console.log(res);
    return res;
};


const postNote = async (noteObj : {author : string, title : string, body : string}) : Promise<INote | undefined>=> {
    let note;
    let headers = await getHeader();
    await requests.postNoteRequest
        .post('', noteObj, {headers: headers})
        .then((response : AxiosResponse)=> {
            note = response.data;
        })
        .catch(error => console.log(error))
    return note;
}

const deleteNote = async (id: string) => {
    let headers = await getHeader();
    await requests.deleteNoteRequest
        .delete('', {
            data: {_id: id},
            headers: headers
        })
        .catch(error => console.log(error))
}

const editNote = async (note : INote) => {
    let headers = await getHeader();
    await requests.editNoteRequest
        .put('', note, {headers: headers})
        .catch(error => console.log(error))
};

const register = async (form : ISignupForm) : Promise<INote | undefined> => {
    let user;
    let headers = await getHeader();
    await requests.registerUserRequest
        .post('', form, {headers: headers})
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => console.log(error))
    return user;
};

const login = async (form : ISignupForm) : Promise<INote | undefined> => {
    let user;
    await requests.loginUserRequest
        .post('', form)
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => console.log(error))
    return user;
};


export default {getAllNotes, getMyNotes, postNote, deleteNote, editNote, register, login}