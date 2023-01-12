import { useContext } from 'react';
import AuthContext from '../../utils/authContext';
import LoginBox from './LoginBox';
import ProfilePage from './ProfilePage';


const LoginPage = (props : {}) => {
    
    let {user} = useContext(AuthContext);

    return user? <ProfilePage/> : <LoginBox/>;   

}

export default LoginPage;