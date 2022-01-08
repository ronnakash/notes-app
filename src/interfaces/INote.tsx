import { nanoid } from 'nanoid';


export default class Note {
    id: string;
    author: string;
    title: string;
    body: string;
    date: string;
    editing: boolean

    constructor (author: string, title: string, body: string, id : string, date? : string) {
        this.author = author;
        this.title = title;
        this.body = body;
        this.id = id;
        this.date =  date? date : new Date().toLocaleDateString();
        this.editing = false;
    }
}
