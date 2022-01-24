import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../interfaces/INote';
import IUser from '../interfaces/IUser';
import ISignupForm from '../interfaces/ISignupForm';
import ISigninForm from '../interfaces/ISigninForm';
import API from '../utils/requests/API';
import { AuthContext } from '../utils/authContext';

const LoginBox = (props : any) => {
    
    let {signIn, signOut, register, user} = useContext(AuthContext);

        if (!user) {
             return (
                <div className= 'form-container'>
                    <SigninForm submitForm={signIn} />
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