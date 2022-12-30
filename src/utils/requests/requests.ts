import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/Note';
import responseParser from './responseParser'
import requestParser from './requestParser';



const noteURL = '/notes';
// const serverURL = 'https://node-server-ronnakash.vercel.app';
// const serverURL = 'https://node-server-jet.vercel.app';
const serverURL = 'http://localhost:5000';
// const serverURL = 'http://18.130.221.18:80';
const getAllNotesURL = '/Admin/get/allNotes';
const postNoteURL = '';
const deleteNoteURL = '';
const editNoteURL = '';
const getMyNotesURL = '/my';
const authURL = '/auth';
const userURL = '/users';
const registerURL = '/register';
const loginURL = '/login';
const googleLoginURL = '/google';
const updateUserURL = '/updateUser';





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
        method: 'PUT',
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
        method: 'POST',
        baseURL: serverURL+noteURL+editNoteURL,
        transformResponse: [responseParser.parseNoteFromUpdateRequest],
        timeout: 5000
      });


const registerUserRequest = axios.create({
        method: 'PUT',
        baseURL: serverURL+authURL+registerURL,
        transformResponse: [responseParser.parseUserFromRegisterRequest],
        timeout: 5000
      });

const loginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+authURL+loginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 5000
      });

const googleLoginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+authURL+googleLoginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 5000
      });


const editUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL,
        //transformRequest: [requestParser.editUserFormToBody],
        transformResponse: [responseParser.parseUserFromUpdateRequest],
        timeout: 5000
      });
      

export default { getAllNotesRequest, getMyNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest, registerUserRequest, loginUserRequest, googleLoginUserRequest, editUserRequest }

