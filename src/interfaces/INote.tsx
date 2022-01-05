import { nanoid } from 'nanoid';


export default class Note {
    id: string;
    author: string;
    title: string;
    body: string;
    date: string;

    constructor (author: string, title: string, body: string) {
        this.author = author;
        this.title = title;
        this.body = body;
        this.id = "000"+nanoid();
        this.date = new Date().toLocaleDateString();

    }
}
