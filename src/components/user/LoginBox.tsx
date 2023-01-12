import { useContext } from 'react';
import SigninForm from './SigninForm';
import AuthContext from '../../utils/authContext';



const LoginBox = (props : {}) => {
    
    let {signInWithGoogle, signIn} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    
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

export default LoginBox;