import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import responseParser from './responseParser'
import requestParser from './requestParser';
import firebase from '../firebase'


let noteURL = '/Admin/notes';
let serverURL = 'http://localhost:4000';
let JWTtoken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';
let getAllNotesURL = '/Admin/get/allNotes';
let postNoteURL = '/post/note';
let deleteNoteURL = '/delete/deleteNote';
let editNoteURL = '/put/updateNote';
let getMyNotesURL = '/get/usersNotes';

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
        //transformRequest: [requestParser.noteToBody],
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
        timeout: 5000
      });


export default { getAllNotesRequest, getMyNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest }

