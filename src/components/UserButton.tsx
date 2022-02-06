import { Navbar, Nav, NavDropdown, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useContext } from 'react'
import { AuthContext } from '../utils/authContext'

const UserButton = (props: any) => {

    let {user, signOut} = useContext(AuthContext);

    if (!user){
        return (
            <DropdownButton className='userButton' title="Guest" id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey='1' href='/login'>login</Dropdown.Item>
                <Dropdown.Item eventKey='2' href='/register' >register</Dropdown.Item>
            </DropdownButton>
        )
    }
    else {
        return (            
            <DropdownButton className='userButton' title={user.username} id="bg-vertical-dropdown-1">
                <Dropdown.Item eventKey='1' href='/notes'>Notes</Dropdown.Item>
                <Dropdown.Item eventKey='2' href='/profile'>Profile</Dropdown.Item>
                <Dropdown.Item eventKey='3' onClick={signOut} className='dangerItem'>Sign out</Dropdown.Item>
            </DropdownButton>
        )
    }      

}

export default UserButton;