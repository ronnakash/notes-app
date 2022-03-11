import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../interfaces/INote';
import IUser from '../interfaces/IUser';
import ISignupForm from '../interfaces/ISignupForm';
import ISigninForm from '../interfaces/ISigninForm';
import API from '../utils/requests/API';
import AuthContext from '../utils/authContext';

const RegisterBox = (props : any) => {
    
    let {register} = useContext(AuthContext);

        return (
        <div className= 'form-container'>
            <SignupForm submitForm={register} />
            <span className='form-input-login'>
                have an account? Login <a href='/login'>here</a>
            </span>
        </div>
    );


}

export default RegisterBox;