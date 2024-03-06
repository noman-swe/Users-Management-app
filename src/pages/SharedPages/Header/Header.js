import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/technext.png';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary bg-header">
                <Container>
                    <Navbar.Brand> <img src={logo} alt="" height={35} /> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>

                        <Nav>
                            <Form className="d-flex">
                                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;