import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Liza Pressman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    <NavDropdown title="Projects" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#thesis">Senior Thesis Exhibition | Distort</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#memories">Memories</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#other">Other Work</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

