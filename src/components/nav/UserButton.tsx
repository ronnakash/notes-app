import { Navbar, Nav, NavDropdown, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import React, { CSSProperties, useContext, useState, useEffect } from 'react'
import AuthContext from '../../utils/authContext'
import UserMenu from './UserMenu'





const UserButton = (props: any) => {

    const UserAvatar = require('react-user-avatar');
    const {user, signOut} = useContext(AuthContext);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }


    const userInitials = () => {
        return (user && user.username)? user.username.substring(0,1).toUpperCase() : 'G'
    }
    
    console.log(window.innerWidth);

    var baseStyle : CSSProperties = {
        position: 'absolute',
        // right: `${20}px`,
        left: `${window.innerWidth-190}px`,
        top: '50px',
    }

    const [style, setStyle] = useState(baseStyle);

    const handleResize = () => {
        const temp = showMenu;
        baseStyle.left = `${window.innerWidth-190}px`;
        setStyle(baseStyle);
        console.log('hrub')
        setShowMenu(false)
    }

    useEffect(() => { 
        window.addEventListener('resize', handleResize)
        handleResize();
    },[])

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