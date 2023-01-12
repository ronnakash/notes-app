import AuthContext from '../../utils/authContext'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext } from 'react'
import EditProfileForm from './EditProfileForm';

const EditProfile = (props : {}) => {

    const {user} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'f'
    }

    return (
        <div className="form-container">
            <div className='center'>
                <h1 className='profile-header'>Edit Profile</h1>
                <div className='user-profile-display'>
                    <div>
                    <UserAvatar className='bigAvatar' size="64" name={userInitials()} src={user?.picture}/>
                    </div>
                    <div className='userDisplayData'>
                        <span className='boldText'>{user?.username}</span>
                        <span className='greyText'>{user?.email}</span>
                    </div>
                </div>
                <EditProfileForm/>
            </div>
        </div>
        

    );

}

export default EditProfile;