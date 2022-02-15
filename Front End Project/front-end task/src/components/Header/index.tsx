import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tasker from './tasker.png';
import taskername from './taskername.png';
import './index.css';
 
const Header: React.FC = () => {
    return(
            <Navbar className="header" id="header" bg="dark" variant="dark" expand="lg">
            <Container>
                <img className="logo" src={tasker} />
                <img className="logo-name" src={taskername} />
                <Navbar.Brand href="http://localhost:3000/#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} className="nav-Item" to="/tarefas" >Tasks</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}
 
export default Header;