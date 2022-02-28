import { AxiosResponse } from 'axios';
import INote from '../../interfaces/INote';
import requests from './requests'
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';
import IUser from '../../interfaces/IUser';


  const getHeader = async (user : IUser | undefined) => {
    //console.log(user)
    let token = user? user.token : null;
    //console.log(token)
    return token? {Authorization: token} : {Authorization: "Bearer"};
  };


const getMyNotes = async (username : string, user : IUser | undefined) : Promise<INote[]> => {
    let res : INote[] = [];
    let headers = await getHeader(user);
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


const postNote = async (noteObj : {author : string, title : string, body : string}, user : IUser | undefined) : Promise<INote | undefined>=> {
    let note : INote | undefined ;
    let headers = await getHeader(user);
    await requests.postNoteRequest
        .post('', noteObj, {headers: headers})
        .then((response : AxiosResponse)=> {
            note = response.data;
        })
        .catch(error => console.log(error))
    return note;
}

const deleteNote = async (id: string, user : IUser | undefined) => {
    let headers = await getHeader(user);
    await requests.deleteNoteRequest
        .delete('', {
            data: {_id: id},
            headers: headers
        })
        .catch(error => console.log(error))
}

const editNote = async (note : INote, user : IUser | undefined) => {
    let headers = await getHeader(user);
    let editedNote;
    await requests.editNoteRequest
        .put('', note, {headers: headers})
        .then((response : AxiosResponse)=> {
            editedNote = response.data;
        })
        .catch(error => console.log(error))
    return editedNote;
};

const register = async (form : ISignupForm) : Promise<IUser | undefined> => {
    let user;
    let headers = await getHeader(user);
    await requests.registerUserRequest
        .post('', form, {headers: headers})
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => console.log(error))
    return user;
};

const login = async (form : ISigninForm) : Promise<IUser | undefined> => {
    let user;
    await requests.loginUserRequest
        .post('', form)
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => console.log(error))
    return user;
};

const googleLoginUser = async (code: string) : Promise<IUser | undefined>=> {
    let googleResponse;
    await requests.googleLoginUserRequest
        .post('', {code})
        .then(res => {
            googleResponse = res.data;
            console.log('googleResponse');
            console.log(googleResponse);
        })
        .catch(error => console.log(error))
    console.log(googleResponse)
    return googleResponse;
};

export default { getMyNotes, postNote, deleteNote, editNote, register, login, googleLoginUser}