import { AxiosResponse } from 'axios';
import INote from '../../interfaces/Note';
import requests from './requests'
import ISignupForm from '../../interfaces/SignupForm';
import ISigninForm from '../../interfaces/SigninForm';
import IUser from '../../interfaces/User';
import IEditUserForm from '../../interfaces/EditUserFrom';
import Swal from 'sweetalert2';


  const getHeader = async (user : IUser | undefined) => {
    let token = user? user.token : null;
    return token? {Authorization: token} : {Authorization: "Bearer"};
  };

  const displayError = (error : Error) =>{
    console.log("displaying error: ");
    console.log(error);
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
        .put('', noteObj, {headers: headers})
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
        .post('', note, {headers: headers})
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
    let headers = await getHeader(user);
    await requests.editUserRequest
        .post('', {
            id: user?.id,
            username: (form.username!=='')? form.username : undefined,
            password: (form.newPassword!=='')? form.newPassword : undefined,
        }, {headers: headers})
        .then(res => {
            let updateUser = res.data;            
            console.log(res)
            user.username = updateUser.username;
            user.picture = updateUser.picture;
        })
        .catch(error => {
            console.log(error)
            displayError(error)})
    return user;
}


export default { getMyNotes, postNote, deleteNote, editNote, register, login, googleLoginUser, editProfile }