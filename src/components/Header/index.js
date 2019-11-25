import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../logo.svg';

export default function Header() {

    return(
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand>
                <img 
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="react logo"    
                />
                Justin Barfield
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link>Github</Nav.Link>
                    <Nav.Link>LinkedIn</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}