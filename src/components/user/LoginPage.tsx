import { useContext } from 'react';
import AuthContext from '../../utils/authContext';
import LoginBox from './LoginBox';
import EditProfile from './EditProfile';
import ProfilePage from './ProfilePage';


const LoginPage = (props : any) => {
    
    let {user} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    return user? <ProfilePage/> : <LoginBox/>;   

}

export default LoginPage;