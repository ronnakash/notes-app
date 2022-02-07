import { Navbar, Nav, NavDropdown, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../utils/authContext'
import UserAvatar from 'react-user-avatar'



const UserButton = (props: any) => {

    const {user, signOut} = useContext(AuthContext);

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleSignOut = () => {
        signOut();
        setShowMenu(false);
    }


    
    if (!user){
        return (
            <div>
                <div onClick={() => {toggleMenu()}} style={{cursor : 'pointer'}}>
                    <UserAvatar className='userButton' size="40" name="Guest" />
                </div>
                <Dropdown.Menu align="end" show={showMenu} className='userDrop' >
                    <Dropdown.Item eventKey="1" href='/login' >Sign in</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href='/register' >Register</Dropdown.Item>
                </Dropdown.Menu> 
            </div>

        )
    }
    else {
        return (
            <div>
            <div onClick={() => {toggleMenu()}} style={{cursor : 'pointer'}}>
                <UserAvatar className='userButton' size="40" name={user.username} src={user.picture}/>
            </div>
            <Dropdown.Menu align="end" show={showMenu} className='userDrop' >
            <Dropdown.Item eventKey='3' href='/notes'>Notes</Dropdown.Item>
                <Dropdown.Item eventKey='4' href='/profile' >Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey='5' onClick={handleSignOut} className='dangerItem' >Sign out</Dropdown.Item>
            </Dropdown.Menu> 
        </div>            
        )
    }      

}

export default UserButton;