import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
// import { NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <Navbar fixed="top" sticky="sticky" bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="/#/">Liza Pressman</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/#/about">About</Nav.Link>
                    <NavDropdown title="Art" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/#/thesis">distort.</NavDropdown.Item>
                        <NavDropdown.Item href="/#/memories">mem.</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/#/other">misc.</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/* <Nav>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    )
}

