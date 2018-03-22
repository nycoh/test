import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';


const Header = () => (
    <header className="hidden-print">
        <Navbar>
            <Navbar.Collapse>
                <Nav>
                    <NavItem className="home">
                        <Link to="/">
                            <FontAwesome name="fas fa-home"/> Inicio
                        </Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem className="courses">
                        <Link to="/courses">
                            <FontAwesome name="fas fa-gamepad"/> Cursos
                        </Link>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem className="about">
                        <Link to="/about">
                            <FontAwesome name="fas fa-users"/> Nosotros
                        </Link>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);
export default Header;
