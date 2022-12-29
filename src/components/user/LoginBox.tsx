import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../../interfaces/Note';
import IUser from '../../interfaces/User';
import ISignupForm from '../../interfaces/SignupForm';
import ISigninForm from '../../interfaces/SigninForm';
import API from '../../utils/requests/API';
import AuthContext from '../../utils/authContext';
import { Dropdown } from 'react-bootstrap';



const LoginBox = (props : any) => {
    
    let {signInWithGoogle, signIn, user} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    
        if (!user) {
             return (
                <div className= 'form-container'>
                    <script src="https://apis.google.com/js/platform.js" async defer></script>
                    <SigninForm 
                        submitForm={signIn}
                        signInWithGoogle={signInWithGoogle}
                    />
                    <span className='form-input-login'>
                        Don't have an account? Register <a href='/register'>here</a>
                    </span>
                </div>
            );
        }
        else return (
            <div >
                <h1 className='home-header'>Hello {user.username}!</h1>
            </div>
        );

}

export default LoginBox;