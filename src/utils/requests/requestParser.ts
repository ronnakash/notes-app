import INote from '../../interfaces/INote';
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';
import IEditUserForm from '../../interfaces/IEditUserFrom';
import IUser from '../../interfaces/IUser';

const noteObjToBody = (note : {author: string, title : string, body : string}, headers : any) : any => {
    let {author, title, body} = note;
    let bodyObj = {
        author: author,
        title: title,
        body: body
    }
    console.log('body obj' + JSON.stringify(bodyObj));
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

const editUserFormToBody = (form : IEditUserForm, user : IUser | undefined) => {
    return {
        id: user?.id,
        username: (form.username!=='')? form.username : undefined,
        password: (form.username!=='')? form.username : undefined,
        //picture: (form.picture!=='')? form.picture : undefined
    }
}

export default { noteObjToBody, noteToBody, signupFormToBody, signinFormToBody, editUserFormToBody }

