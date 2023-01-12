import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/Note';
import responseParser from './responseParser'
import requestParser from './requestParser';



const noteURL = '/notes';
const serverURL = 'https://node-server-ronnakash.vercel.app';
// const serverURL = 'http://localhost:5000';
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


const getMyNotesRequest = axios.create({
      method: 'GET',
      baseURL: serverURL+noteURL+getMyNotesURL, 
      transformResponse: [responseParser.parseNotesFromRequest],
      timeout: 10000
  });


const postNoteRequest = axios.create({
        method: 'PUT',
        baseURL: serverURL+noteURL+postNoteURL, 
        //transformRequest: [requestParser.noteObjToBody],
        transformResponse: [responseParser.parseNoteFromPostRequest],
        timeout: 10000,
      });

  
const deleteNoteRequest = axios.create({
        method: 'DELETE',
        baseURL: serverURL+noteURL+deleteNoteURL,
        timeout: 10000
      });


const editNoteRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+noteURL+editNoteURL,
        transformResponse: [responseParser.parseNoteFromUpdateRequest],
        timeout: 10000
      });


const registerUserRequest = axios.create({
        method: 'PUT',
        baseURL: serverURL+authURL+registerURL,
        transformResponse: [responseParser.parseUserFromRegisterRequest],
        timeout: 10000
      });


const loginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+authURL+loginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 10000
      });

      
const googleLoginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+authURL+googleLoginURL,
        transformResponse: [responseParser.parseUserFromLoginRequest],
        timeout: 10000
      });


const editUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL,
        //transformRequest: [requestParser.editUserFormToBody],
        transformResponse: [responseParser.parseUserFromUpdateRequest],
        timeout: 10000
      });
      

export default { getMyNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest, registerUserRequest, loginUserRequest, googleLoginUserRequest, editUserRequest }

