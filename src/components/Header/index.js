import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../logo.svg';
import './style.css';

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
                    <Nav.Link href="https://github.com/justin-barfield" target="_blank">Github</Nav.Link>
                    <Nav.Link href="www.linkedin.com/in/justin-barfield-473503101" target="_blank">LinkedIn</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}