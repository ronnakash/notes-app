import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../../interfaces/Note';
import IUser from '../../interfaces/User';
import ISignupForm from '../../interfaces/SignupForm';
import ISigninForm from '../../interfaces/SigninForm';
import API from '../../utils/requests/API';
import AuthContext from '../../utils/authContext';

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