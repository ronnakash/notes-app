import INote from '../../interfaces/INote';

const noteToBody = (note : {author: string, title : string, body : string}, headers : any) : any => {
    let {author, title, body} = note;
    let bodyObj = {
        author: author,
        title: title,
        body: body
    }
    return bodyObj
}

export default { noteToBody }