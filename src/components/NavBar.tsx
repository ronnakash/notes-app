import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../logo.svg'
import 'bootstrap/dist/css/bootstrap.css'

const NavBar = (props: any) => {

    return (
        <Navbar bg='dark' variant='dark'>
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
    )

}

export default NavBar