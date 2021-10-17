import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="#home">Naturebins Admin</Navbar.Brand> */}
        <Link to="/" className="navbar-brand">Naturebins Admin</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
            <li className="nav-item">
              <NavLink to="signin" className="nav-link" >Signin</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/signup" className="nav-link" >Signup</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )

}

export default Header