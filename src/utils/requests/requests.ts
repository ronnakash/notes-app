import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import responseParser from './responseParser'
import requestParser from './requestParser';
import firebase from '../firebase'


const noteURL = '/admin/notes';
const serverURL = 'http://localhost:4000';
const JWTtoken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';
const getAllNotesURL = '/Admin/get/allNotes';
const postNoteURL = '/post/note';
const deleteNoteURL = '/delete/deleteNote';
const editNoteURL = '/put/updateNote';
const getMyNotesURL = '/get/myNotes';
const userURL = '/amdin/users';
const registerURL = '/registerAndLogin';
const loginURL = '/login';


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


/*
let headers = {
  Authorization: fbToken
};
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
        transformRequest: [requestParser.noteObjToBody],
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
        transformRequest: [requestParser.noteToBody],
        timeout: 5000
      });


const registerUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+registerURL,
        transformResponse: [responseParser.parseUserFromRequest],
        timeout: 5000
      });

const loginUserRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+userURL+loginURL,
        transformResponse: [responseParser.parseUserFromRequest],
        timeout: 5000
      });


export default { getAllNotesRequest, getMyNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest, registerUserRequest, loginUserRequest }

