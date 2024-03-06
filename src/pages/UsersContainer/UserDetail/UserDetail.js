import { useParams } from 'react-router-dom';
import useUserCallBackFetch from '../../../hooks/useUserCallBackFetch';
import { Card, Container } from 'react-bootstrap';

const UserDetail = () => {
    const { userDetailId } = useParams();
    const [users] = useUserCallBackFetch();

    console.log("Users:", users);

    const clickedUserId = parseInt(userDetailId);
    const clickedUser = users.find(user => user.id === clickedUserId);
    console.log(clickedUser);


    return (
        <Container>
            <div>
                {
                    !clickedUser ?

                        <div className="d-flex justify-content-center mt-lg-5">
                            <div className="spinner-border" style={{ width: "5rem", height: "5rem" }} role="status">
                                <span class="visually-hidden">Loading...</span>

                            </div>
                        </div>

                        :

                        <Card className='m-3 w-50 mx-auto py-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded' >
                            <Card.Img variant="top" src={clickedUser?.image} className='w-50 mx-auto p-3' />
                            <Card.Body className='mx-auto py-0 px-2 w-75'>

                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Name:</th>
                                            <td className='ps-1'> <p className="fw-semibold user-name">{clickedUser?.firstName + " " + clickedUser?.lastName} </p> </td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Email:</th>
                                            <td> <small> {clickedUser?.email}</small></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Position:</th>
                                            <td>  <small>{clickedUser?.company?.title}</small></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">Company:</th>
                                            <td>  <small>{clickedUser?.company?.name}</small></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">House:</th>
                                            <td> <small>{clickedUser?.address?.address}</small></td>
                                        </tr>

                                        <tr>
                                            <th scope="row">City:</th>
                                            <td> <small>  {clickedUser?.address?.city}</small></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Card.Body>
                        </Card>
                }
            </div>
        </Container>
    );
};

export default UserDetail;