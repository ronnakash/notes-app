import { useContext, useState } from 'react';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import INote from '../../interfaces/INote';
import IUser from '../../interfaces/IUser';
import ISignupForm from '../../interfaces/ISignupForm';
import ISigninForm from '../../interfaces/ISigninForm';
import API from '../../utils/requests/API';
import AuthContext from '../../utils/authContext';
import { Dropdown } from 'react-bootstrap';



const LoginBox = (props : any) => {
    
    let {signInWithGoogle, signIn, signOut, user} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');
    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'f'
    }

    
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