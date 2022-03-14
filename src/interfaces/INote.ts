
export default class Note {
    id: string;
    author: string;
    title: string;
    body: string;
    color: string
    date: string;
    editing: boolean

    constructor (author: string, title: string, body: string, id : string, createdAt? : string, updatedAt? : string, color? : string) {
        this.author = author;
        this.title = title;
        this.body = body;
        this.id = id;
        this.date =  this.dateCreator(createdAt, updatedAt) || new Date().toLocaleDateString();
        this.color = color || '#fcf483'
        this.editing = false;
    }

    dateCreator(createdAt? : string, updatedAt? : string){
        if(createdAt){
            let createDate = this.dateParser(createdAt);
            let editedDate = updatedAt? this.dateParser(updatedAt) : null;
            if (editedDate)
            return createdAt!==updatedAt ? createDate +'\n'+ editedDate : createDate;
        }
        else return null;

    }

    dateParser(dateString : string){
        console.log(dateString)
        let split =  dateString.split('T');
        return split[0] + ' '+split[1].substring(0,5)
    }


}
