import { useContext } from 'react';
import SigninForm from './SigninForm';
import AuthContext from '../../utils/authContext';



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