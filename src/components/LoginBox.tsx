import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider, EmailAuthProvider, User, getRedirectResult } from 'firebase/auth';
import { onAuthStateChanged } from 'firebase/auth'
import firebase from '../utils/firebase'
import { useState } from 'react';

const LoginBox = ({}) => {

const [user, setUser] = useState(firebase.auth.currentUser);

onAuthStateChanged(firebase.auth, (newUser) => {
    if (user)
        console.log('logged in lb');
    else
        console.log('no user')
    setUser(newUser)
    console.log(newUser);
});

const signOut = async () => {
    await firebase.auth.signOut()
};


    return (
        <div className='center' >
            <h1>Hello {user? user.displayName : 'guest'}</h1>
            {user ?
                <button className='signout' onClick={signOut}>
                    signOut
                </button> : 
                <StyledFirebaseAuth
                    uiConfig={firebase.configUI}
                    firebaseAuth={firebase.auth}  >      
                </StyledFirebaseAuth>
            }
        </div>


    );
}

export default LoginBox;