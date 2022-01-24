import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../interfaces/INote';
import IUser from '../interfaces/IUser';
import ISignupForm from '../interfaces/ISignupForm';
import ISigninForm from '../interfaces/ISigninForm';
import API from '../utils/requests/API';
import { AuthContext } from '../utils/AuthContext';

const LoginBox = (props : any) => {
    
    let {signIn, signOut, register, user} = useContext(AuthContext);

        if (!user) {
             return (
                <div className= 'form-container'>
                    <SigninForm submitForm={signIn} />
                    <SignupForm submitForm={register} />
                </div>
            );
        }
        else return (<button onClick={signOut}> logout</button>);

}

export default LoginBox;