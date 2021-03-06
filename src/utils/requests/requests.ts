import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import responseParser from './responseParser'
import requestParser from './requestParser';



const noteURL = '/User/notes';
const serverURL = 'http://localhost:4000';
const getAllNotesURL = '/Admin/get/allNotes';
const postNoteURL = '/post/note';
const deleteNoteURL = '/delete/deleteNote';
const editNoteURL = '/put/updateNote';
const getMyNotesURL = '/get/usersNotes';
const userURL = '/User/users';
const registerURL = '/registerAndLogin';
const loginURL = '/login';
const googleLoginURL = '/google/login';
const updateUserURL = '/updateUser';


/*
let getToken = async () => {
  if (firebase.auth.currentUser){
    let token = "Bearer" + (await firebase.auth.currentUser?.getIdToken(true).catch(e=> ""));
    return token;
  }
  return "";
}


let fbToken = (await getToken()) || JWTtoken;
*/


const getAllNotesRequest = axios.create({
        method: 'GET',
        baseURL: serverURL+noteURL+getAllNotesURL, 
        transformResponse: [responseParser.parseNotesFromRequest],
        timeout: 5000
    });

const getMyNotesRequest = axios.create({
      method: 'GET',
      baseURL: serverURL+noteURL+getMyNotesURL, 
      transformResponse: [responseParser.parseNotesFromRequest],
      timeout: 5000
  });


const postNoteRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+noteURL+postNoteURL, 
        //transformRequest: [requestParser.noteObjToBody],
        transformResponse: [responseParser.parseNoteFromPostRequest],
        timeout: 5000,
      });

  
const deleteNoteRequest = axios.create({
        method: 'DELETE',
        baseURL: serverURL+noteURL+deleteNoteURL,
        timeout: 5000
      });


const editNoteRequest = axios.create({
        method: 'PUT',
        baseURL: serverURL+noteURL+editNoteURL,
        transformResponse: [responseParser.parseNoteFromUpdateRequest],
        timeout: 5000
      });


const registerUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+registerURL,
        transformResponse: [responseParser.parseUserFromRegisterRequest],
        timeout: 5000
      });

const loginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+loginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 5000
      });

const googleLoginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+googleLoginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 5000
      });


const editUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+updateUserURL,
        //transformRequest: [requestParser.editUserFormToBody],
        transformResponse: [responseParser.parseUserFromUpdateRequest],
        timeout: 5000
      });
      

export default { getAllNotesRequest, getMyNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest, registerUserRequest, loginUserRequest, googleLoginUserRequest, editUserRequest }

