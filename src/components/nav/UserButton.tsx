import 'bootstrap/dist/css/bootstrap.css'
import { CSSProperties, useContext, useState, useEffect } from 'react'
import AuthContext from '../../utils/authContext'
import UserMenu from './UserMenu'


const UserButton = (props: {}) => {

    const UserAvatar = require('react-user-avatar');
    const {user} = useContext(AuthContext);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const offset = () => {return user? 300 : 190}

    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'G'
    }
    
    var baseStyle : CSSProperties = {
        position: 'absolute',
        left: `${window.innerWidth-offset()}px`,
        top: '50px',
    }

    const [style, setStyle] = useState(baseStyle);

    const handleResize = () => {
        baseStyle.left = `${window.innerWidth-offset()}px`;
        setStyle(baseStyle);
        setShowMenu(false);
    }

    useEffect(() => { 
        window.addEventListener('resize', handleResize)
        handleResize();
    },[user])

    return (
        <div>
            <div onClick={() => {toggleMenu()}} style={{cursor : 'pointer'}}>
                <UserAvatar className='userButton' size="40" name={userInitials()} src={user? user.picture : undefined}/>
            </div>
            <UserMenu showMenu={showMenu} setShowMenu={setShowMenu} baseStyle= {style}/>

        </div>            
    )
   

}

export default UserButton;