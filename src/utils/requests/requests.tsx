import axios, {AxiosResponse} from 'axios'
import INote from '../../interfaces/INote';
import responseParser from './responseParser'
import requestParser from './requestParser';


let serverURL = 'http://localhost:4000';
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';
let getAllNotesURL = '/Admin/notes/Admin/get/allNotes';
let postNoteURL = '/Admin/notes/post/note';
let deleteNoteURL = '/Admin/notes/delete/deleteNote'



const getAllNotesRequest = axios.create({
        method: 'GET',
        baseURL: serverURL+getAllNotesURL, 
        headers: {
          Authorization: token
        }, 
        transformResponse: [responseParser.parseNotesFromRequest],
        timeout: 5000
    });


const postNoteRequest = axios.create({
        method: 'POST',
        baseURL: serverURL+postNoteURL, 
        headers: {
          Authorization: token
        },
        //transformRequest: [requestParser.noteToBody],
        transformResponse: [responseParser.parseNoteFromPostRequest],
        timeout: 5000,
    });

  
const deleteNoteRequest = axios.create({
        method: 'DELETE',
        baseURL: serverURL+deleteNoteURL,
        headers: {
          Authorization: token
        },
        timeout: 5000
    });


export default { getAllNotesRequest, postNoteRequest, deleteNoteRequest }

