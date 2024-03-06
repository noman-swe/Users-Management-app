import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    // console.log("props user data", props);
    const { image, firstName, lastName, email, address, company } = user;

    const navigate = useNavigate();

    const handleUserDetails = id => {
        navigate('/userDetail')
        console.log("Clicked", id);
    }
    return (
        <div>
            <Card className='m-3 ' style={{ width: '310px' }}>
                <Card.Img variant="top" src={image} className='w-75 mx-auto p-3' />
                <Card.Body className='mx-auto py-0 px-2' style={{ width: "280px" }}>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td className='ps-1'> <Link to={''} onClick={() => handleUserDetails(user.id)} className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold">{firstName + " " + lastName} </Link> </td>
                            </tr>
                            <tr>
                                <th scope="row">Email:</th>
                                <td> <small> {email}</small></td>
                            </tr>

                            <tr>
                                <th scope="row">Position:</th>
                                <td>  <small>{company?.title}</small></td>
                            </tr>

                            <tr>
                                <th scope="row">Company:</th>
                                <td>  <small>{company?.name}</small></td>
                            </tr>

                            <tr>
                                <th scope="row">House:</th>
                                <td> <small>{address?.address}</small></td>
                            </tr>

                            <tr>
                                <th scope="row">City:</th>
                                <td> <small>  {address?.city}</small></td>
                            </tr>
                        </tbody>
                    </table>

                </Card.Body>

            </Card>
        </div>
    );
};

export default User;