import AuthContext from '../../utils/authContext'
import 'bootstrap/dist/css/bootstrap.css'
import { useContext } from 'react'

const EditProfile = (props : {}) => {

    const {user, signOut, homeRedirect} = useContext(AuthContext);
    const UserAvatar = require('react-user-avatar');

    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'f'
    }

    const logout = () => {
        signOut()
        homeRedirect()
    }

    return (
        <div className="form-container-large">
            <div className='center'>
                <div className='user-profile-display'>
                    <div>
                        <UserAvatar className='bigAvatar' size="128" name={userInitials()} src={user?.picture}/>
                    </div>
                    <div className='userDisplayData'>
                        <span className='boldTextHeader'>{user?.username}</span>
                        <span className='greyTextHeader'>{user?.email}</span>
                    </div>
                </div>
            </div>
            <div className='centered centered-vertical' >
                <a type="button" href="edit_user" role="button"
                    className="btn btn-primary button-size button-space"
                    >
                        Edit profile
                </a>
                <a type="button" role="button" onClick={logout}
                    className="btn btn-danger button-size button-space"
                    >
                        Logout
                </a>
            </div>
        </div>
        

    );

}

export default EditProfile;