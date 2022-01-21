import INote from '../../interfaces/INote';
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';

const noteObjToBody = (note : {author: string, title : string, body : string}, headers : any) : any => {
    let {author, title, body} = note;
    let bodyObj = {
        author: author,
        title: title,
        body: body
    }
    return bodyObj
}

const signupFormToBody = (form : ISignupForm) => {
    let {username, email, password} = form;
    let bodyObj = {
        username: username,
        email: email,
        password: password
    }
    return bodyObj
}

const signinFormToBody = (form : ISigninForm) => {
    let {username, email, password} = form;
    let bodyObj = {
        username: username,
        email: email,
        password: password
    }
    return bodyObj
}

const noteToBody = (note : INote) : any => {
    let {id, title, body} = note;
    let bodyObj = {
        _id: id,
        title: title,
        body: body
    }
    return bodyObj
}

export default { noteObjToBody, noteToBody, signupFormToBody, signinFormToBody }

