import { Navbar, Nav, NavDropdown, Button, DropdownButton, Dropdown  } from 'react-bootstrap'
import logo from '../../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import React, { useContext } from 'react'
import UserButton from './UserButton'
import AuthContext from '../../utils/authContext'


const NavBar = (props: any) => {

  const {user} = useContext(AuthContext);

    return (
        <div className='navContainer'>
          <Navbar className='hi' bg='dark' variant='dark'>
            <Navbar.Brand>
              <img src={logo} alt='logo' height='40px'/>
              NotesApp
            </Navbar.Brand>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/notes'>Notes</Nav.Link>
              <Nav.Link href={user? '/profile' : '/login'}>Login</Nav.Link>
              <Nav.Link href='/register'>Register</Nav.Link>
              <NavDropdown title='About'>
                <NavDropdown.Item href='/about'>About the app</NavDropdown.Item>
                <NavDropdown.Item href='/privacy'>Privacy policy</NavDropdown.Item>
                <NavDropdown.Item href='/terms_of_service'>Terms of service</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
          <UserButton/>
        </div>
    )

}

export default NavBar