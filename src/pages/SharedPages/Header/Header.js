import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/technext.png';
import { Link } from 'react-router-dom';
import useUserCallBackFetch from '../../../hooks/useUserCallBackFetch';

const Header = () => {

    const [value, setValue] = useState('');
    const [users] = useUserCallBackFetch();

    const handleSearchInputChange = event => {
        setValue(event.target.value);
    }

    const handleSearch = searchTerm => {
        setValue(searchTerm);
    }

    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary bg-header">
                <Container>
                    <Navbar.Brand> <Link to={'/'}> <img src={logo} alt="" height={35} /></Link> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>

                        <Nav>
                            <div className="search-container">
                                <div className="search-inner d-flex">
                                    <Form.Control onChange={handleSearchInputChange} value={value} type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                    <Button onClick={() => handleSearch(value)} variant="outline-success">Search</Button>
                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container>
                <div className="dropdown d-flex flex-column ms-auto w-25">
                    {
                        users.filter(user => {
                            const searchTerm = value.toLowerCase();
                            const firstName = user.firstName.toLowerCase();

                            return searchTerm && firstName.startsWith(searchTerm) && (firstName !== searchTerm);

                        }).slice(0, 5)
                            .map(user =>
                                <div
                                    onClick={() => handleSearch(user.firstName)}
                                    key={user.id}
                                    className='dropdown-row'
                                >
                                    <p className='border-bottom mb-0'>{user.firstName}</p>
                                </div>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Header;