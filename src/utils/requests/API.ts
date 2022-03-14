import { AxiosResponse } from 'axios';
import INote from '../../interfaces/INote';
import requests from './requests'
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';
import IUser from '../../interfaces/IUser';
import IEditUserForm from '../../interfaces/IEditUserFrom';
import Swal from 'sweetalert2';


  const getHeader = async (user : IUser | undefined) => {
    let token = user? user.token : null;
    return token? {Authorization: token} : {Authorization: "Bearer"};
  };

  const displayError = (error : Error) =>{
    Swal.fire({
        title: 'Error!',
        text:  error.message,
        icon: 'error' ,
        confirmButtonText: 'Dismiss'
    })
  }


const getMyNotes = async (username : string, user : IUser | undefined) : Promise<INote[]> => {
    let res : INote[] = [];
    let headers = await getHeader(user);
    await requests.getMyNotesRequest
        .get('', {
            params: {author: username},
            headers: headers
        })
        .then((response : AxiosResponse)=> {
            res = response.data;
        })
        .catch(error => displayError(error))
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
        .catch(error => displayError(error))
    return note;
}

const deleteNote = async (id: string, user : IUser | undefined) => {
    let headers = await getHeader(user);
    await requests.deleteNoteRequest
        .delete('', {
            data: {_id: id},
            headers: headers
        })
        .catch(error => displayError(error))
}

const editNote = async (note : INote, user : IUser | undefined) : Promise<INote> => {
    let headers = await getHeader(user);
    let editedNote : INote;
    editedNote = (await requests.editNoteRequest
        .put('', note, {headers: headers})
        .catch(error => displayError(error)))?.data;
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
        .catch(error => displayError(error))
    return user;
};

const login = async (form : ISigninForm) : Promise<IUser | undefined> => {
    let user;
    await requests.loginUserRequest
        .post('', form)
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => displayError(error))
    return user;
};

const googleLoginUser = async (code: string) : Promise<IUser | undefined>=> {
    let googleResponse;
    await requests.googleLoginUserRequest
        .post('', {code})
        .then(res => {
            googleResponse = res.data;
        })
        .catch(error => displayError(error))
    return googleResponse;
};

const editProfile = async (form : IEditUserForm, user : IUser) => {
    await requests.editUserRequest
        .post('', {
            id: user?.id,
            username: (form.username!=='')? form.username : undefined,
            password: (form.newPassword!=='')? form.newPassword : undefined,
        })
        .then(res => {
            let updateUser = res.data;            
            user.username = updateUser.username;
            user.picture = updateUser.picture;
        })
        .catch(error => displayError(error))
    return user;
}


export default { getMyNotes, postNote, deleteNote, editNote, register, login, googleLoginUser, editProfile }