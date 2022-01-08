import { AxiosResponse } from 'axios';
import INote from '../../interfaces/INote';
import requests from './requests'


const getAllNotes = async () : Promise<INote[]> => {
    let res : INote[] = [];
    await requests.getAllNotesRequest
        .get('')
        .then((response : AxiosResponse)=> {
            console.log(response.data)
            res = response.data;
        })
        .catch(error => console.log(error))
        //console.log(res);
    return res;
};


const postNote = async (noteObj : {author : string, title : string, body : string}) : Promise<INote | undefined>=> {
    let note;
    let {author, title, body} = noteObj;
    await requests.postNoteRequest
        .post('', {
            author: author,
            title: title,
            body: body
        })
        .then((response : AxiosResponse)=> {
            note = response.data;
        })
        .catch(error => console.log(error))
    return note;
}

const deleteNote = async (id: string) => {
    await requests.deleteNoteRequest
        .delete('', {
            data: {_id: id}
        })
        .catch(error => console.log(error))
}


export default {getAllNotes ,postNote, deleteNote}