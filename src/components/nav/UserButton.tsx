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


    return (
        <div>
            <div onClick={() => {toggleMenu()}} style={{cursor : 'pointer'}}>
                <UserAvatar className='userButton' size="40" name={userInitials()} src={user? user.picture : undefined}/>
            </div>
            <UserMenu showMenu={showMenu} setShowMenu={setShowMenu}/>

        </div>            
    )
   

}

export default UserButton;