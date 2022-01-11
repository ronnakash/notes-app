import fbApp from '../utils/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { GoogleAuthProvider, EmailAuthProvider, User  } from 'firebase/auth';


const LoginBox = ({}) => {

const configUI : firebaseui.auth.Config=  {
    signInFlow: 'popupMode',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccessWithAuthResult: () : boolean=> {
            return false;
        },
        signInFailure: () => {}
    },
}


const user : (User | null) = fbApp.auth.currentUser;


    return (
        <div className='login-box' >
            <StyledFirebaseAuth uiConfig={configUI} firebaseAuth={fbApp.auth}  >      
            </StyledFirebaseAuth>
        </div>


    );
}

export default LoginBox;