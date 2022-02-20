import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../interfaces/INote';
import IUser from '../interfaces/IUser';
import ISignupForm from '../interfaces/ISignupForm';
import ISigninForm from '../interfaces/ISigninForm';
import API from '../utils/requests/API';
import AuthContext from '../utils/authContext';

const LoginBox = (props : any) => {
    
    let {signInWithGoogle, signIn, signOut, user} = useContext(AuthContext);
    
    const handleGoogleResponse = async () => {
    }

        if (!user) {
             return (
                <div className= 'form-container'>
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                    <SigninForm 
                        submitForm={signIn}
                        signInWithGoogle={signInWithGoogle}
                        />
                </div>
            );
        }
        else return (
            <div >
            <h1>Hello {user.username}!</h1>
            <button onClick={signOut}> logout</button>
        </div>
        
        );

}

export default LoginBox;