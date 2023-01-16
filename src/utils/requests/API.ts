import { AxiosResponse } from 'axios';
import INote from '../../interfaces/Note';
import requests from './requests'
import SignupForm from '../../interfaces/SignupForm';
import SigninForm from '../../interfaces/SigninForm';
import User from '../../interfaces/User';
import EditUserForm from '../../interfaces/EditUserFrom';


  const getHeader = async (user : User | undefined) => {
    let token = user? user.token : null;
    return token? {Authorization: token} : {Authorization: "Bearer"};
  };

  const displayError = (error : Error) =>{
    console.log("error: ");
    console.log(error);
    // Swal.fire({
    //     title: 'Error!',
    //     text:  error.message,
    //     icon: 'error' ,
    //     confirmButtonText: 'Dismiss'
    // })
  }


const getMyNotes = async (username : string, user : User | undefined) : Promise<INote[]> => {
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


const postNote = async (noteObj : {author : string, title : string, body : string}, user : User | undefined) : Promise<INote | undefined>=> {
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

const deleteNote = async (id: string, user : User | undefined) => {
    let headers = await getHeader(user);
    await requests.deleteNoteRequest
        .delete('', {
            data: {_id: id, author: user?.email},
            headers: headers
        })
        .catch(error => displayError(error))
}

const editNote = async (note : INote, user : User | undefined) : Promise<INote> => {
    let headers = await getHeader(user);
    let editedNote : INote;
    editedNote = (await requests.editNoteRequest
        .post('', note, {headers: headers})
        .catch(error => displayError(error)))?.data;
    return editedNote;
};

const register = async (form : SignupForm) : Promise<User | undefined> => {
    let user;
    let headers = await getHeader(user);
    const registerForm : SigninForm = {
        username: form.username,
        email: form.email,
        password: form.password1
    };
    await requests.registerUserRequest
        .put('', registerForm, {headers: headers})
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => displayError(error))
    return user;
};

const login = async (form : SigninForm) : Promise<User | undefined> => {
    let user;
    await requests.loginUserRequest
        .post('', form)
        .then((response : AxiosResponse)=> {
            user = response.data;
        })
        .catch(error => displayError(error))
    return user;
};

const googleLoginUser = async (code: string) : Promise<User | undefined>=> {
    let googleResponse;
    await requests.googleLoginUserRequest
        .post('', {code})
        .then(res => {
            googleResponse = res.data;
        })
        .catch(error => displayError(error))
    return googleResponse;
};

const editProfile = async (form : EditUserForm, user : User) => {
    let headers = await getHeader(user);
    let updateUser;
    await requests.editUserRequest
        .post('', {
            id: user?.id,
            username: (form.username!=='')? form.username : undefined,
            password: (form.newPassword!=='')? form.newPassword : undefined,
            picture: (form.picUrl!=='')? form.picUrl : undefined, 
            email: user.email
        }, {headers: headers})
        .then(res => {
            console.log(res);
            updateUser = res.data;            
            user.username = updateUser.username;
            user.picture = updateUser.picture;
        })
        .catch(error => {
            displayError(error)})
    return user;
}


export default { getMyNotes, postNote, deleteNote, editNote, register, login, googleLoginUser, editProfile }