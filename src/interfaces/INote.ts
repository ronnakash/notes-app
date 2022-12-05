class NoteDate {
    createdAt : string;
    updatedAt : string | null;
    updated : boolean;

    constructor ( createdAt: string, updatedAt : string) {
        console.log("ca: " + createdAt + " ua: " + updatedAt);
        this.createdAt = NoteDate.dateParser(createdAt);
        this.updatedAt = NoteDate.dateParser(updatedAt);
        this.updated = updatedAt != createdAt;
        console.log("updated:" + this.updated);
    }

    private static dateParser(dateString : string)  {
        console.log(dateString)
        let split =  dateString.split('T');
        return split[0] + ' '+split[1].substring(0,5)
    }
}

export default class Note {
    id: string;
    author: string;
    title: string;
    body: string;
    color: string
    date: NoteDate;
    editing: boolean

    constructor (author: string, title: string, body: string, id : string, createdAt : string, updatedAt : string, color? : string) {
        this.author = author;
        this.title = title;
        this.body = body;
        this.id = id;
        this.date = new NoteDate(createdAt, updatedAt) 
        this.color = color || '#fcf483'
        this.editing = false;
    }

}
