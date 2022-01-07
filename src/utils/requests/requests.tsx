import axios, {AxiosResponse} from 'axios'
import requestParser from './requestParser'


let serverURL = 'http://localhost:4000';
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWQzNzhmY2ZlMzIxOTA2ZGQxOTZmZmQiLCJ1c2VybmFtZSI6IkFkbWluNSIsInBlcm1pc3Npb25zIjoiQWRtaW4iLCJpYXQiOjE2NDEyNjA0MzcsImV4cCI6MTY0Mzg1MjQzNywiaXNzIjoiQWRtaW5pc3RyYXRvciJ9.2jlZAppyQNJroovGxo9p0LrJMNDIadHERvcFg-z42RU';
let getAllNotesURL = '/Admin/notes/Admin/get/allNotes'

const getAllNotesRequest = axios.create({
    method: 'GET',
    baseURL: serverURL+getAllNotesURL, 
    headers: {
      Authorization: token
    }, 
    transformResponse: [requestParser.parseNotesFromRequest] 
  });

  export default {getAllNotesRequest}