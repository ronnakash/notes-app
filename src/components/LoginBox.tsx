import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider, EmailAuthProvider, User, getRedirectResult } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth'
import firebase from '../utils/firebase'
import { useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

const LoginBox = ({}) => {

const [user, setUser] = useState(firebase.auth.currentUser);

onAuthStateChanged(firebase.auth, (newUser) => {
    if (newUser)
        console.log('logged in');
    else console.log('logged out');
    setUser(newUser)
    console.log(newUser);
});

const signOut = async () => {
    await firebase.auth.signOut()
};

const submitForm = () => {
    console.log('submitted!');
}

    return (
        <div className= 'form-container'>
            <SigninForm submitForm={submitForm} />
        </div>


    );
}

export default LoginBox;