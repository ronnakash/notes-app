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
        this.id = '1';
        this.date = 'now';
        
    }
}
