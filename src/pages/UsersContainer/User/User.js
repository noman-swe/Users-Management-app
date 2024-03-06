import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({ user }) => {
    // console.log("props user data", props);
    const { image, firstName, lastName, email, address, company } = user;
    return (
        <div>
            <Card className='gap-4 m-3 ' style={{ width: '320px' }}>
                <Card.Img variant="top" src={image} className='w-75 mx-auto p-4' />
                <Card.Body className='lh-sm mx-auto' style={{ width: "280px" }}>
                    <Card.Title>Name : {firstName + " " + lastName}</Card.Title>
                    <Card.Text>Email : {email}</Card.Text>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                        <small className=''>Office</small>
                        <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                    </div>

                    <section>
                        <table>
                            <th className='fw-normal'>Position: </th>
                            <td className='ps-1'> <small>{company?.title}</small> </td>
                        </table>
                        <table>
                            <th className='fw-normal'>Company: </th>
                            <td className='ps-1'> <small>{company?.name}</small> </td>
                        </table>
                    </section>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                        <small className=''>Address</small>
                        <div className='bg-dark w-50 mx-2' style={{ height: '1px' }}></div>
                    </div>

                    <table>
                        <th className='fw-normal'>House:</th>
                        <td className='ps-1'><small>{address?.address}</small></td>
                    </table>
                    <table>
                        <th className='fw-normal fs-'>City:</th>
                        <td className='ps-1'> <small>  {address?.city}</small></td>
                    </table>

                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='bg-dark w-100 mt-3 mb-2 mx-2' style={{ height: '1px' }}></div>
                    </div>

                </Card.Body>

            </Card>
        </div>
    );
};

export default User;