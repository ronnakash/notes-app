import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import responseParser from './responseParser'
import requestParser from './requestParser';


let serverURL = 'http://localhost:4000';
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';
let getAllNotesURL = '/Admin/get/allNotes';
let postNoteURL = '/post/note';
let deleteNoteURL = '/delete/deleteNote'
let editNoteURL = '/put/updateNote'

let noteURL = '/Admin/notes'

let headers = {
  Authorization: token
};


const getAllNotesRequest = axios.create({
        method: 'GET',
        baseURL: serverURL+noteURL+getAllNotesURL, 
        headers: headers, 
        transformResponse: [responseParser.parseNotesFromRequest],
        timeout: 5000
    });


const postNoteRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+noteURL+postNoteURL, 
        headers: headers,
        //transformRequest: [requestParser.noteToBody],
        transformResponse: [responseParser.parseNoteFromPostRequest],
        timeout: 5000,
    });

  
const deleteNoteRequest = axios.create({
        method: 'DELETE',
        baseURL: serverURL+noteURL+deleteNoteURL,
        headers: headers,
        timeout: 5000
    });


const editNoteRequest = axios.create({
        method: 'PUT',
        baseURL: serverURL+noteURL+editNoteURL,
        headers: headers,
        timeout: 5000
      });


export default { getAllNotesRequest, postNoteRequest, deleteNoteRequest, editNoteRequest }

