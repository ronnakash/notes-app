import { Navbar, Nav, NavDropdown, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import UserButton from './UserButton'

const NavBar = (props: any) => {

  const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
    
  };

    return (
        <div className='navContainer'>
          <Navbar className= 'hi' bg='dark' variant='dark'>
            <Navbar.Brand>
              <img  src={logo} height='40px'/>
              NotesApp
            </Navbar.Brand>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/login'>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <Nav.Link href='/notes'>Notes</Nav.Link>
              <NavDropdown title='Dropdown'>
                <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
                <NavDropdown.Item href='/notes'>Notes</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
            <UserButton></UserButton>
          
        </div>
    )

}

export default NavBar