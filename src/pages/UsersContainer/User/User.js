import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './User.css';
import useUserCallBackFetch from '../../../hooks/useUserCallBackFetch';

const User = ({ user }) => {
    const { image, firstName, lastName, email, address, company } = user;
    const [users] = useUserCallBackFetch();
    const navigate = useNavigate();

    const handleUserDetails = clickedId => {
        navigate('/userDetail');
        const clickedUser = users.find(user => user.id === clickedId);
        console.log("Clicked", clickedUser);
    }

    return (
        <div>
            <Card className='m-3 ' style={{ width: '310px', height: "520px" }}>
                <Card.Img variant="top" src={image} className='w-75 mx-auto p-3' />
                <Card.Body className='mx-auto py-0 px-2' style={{ width: "280px" }}>

                    <table className="table">
                        <tbody>
                            <tr>
                                <th scope="row">Name:</th>
                                <td className='ps-1'> <p onClick={() => handleUserDetails(user.id)} className="fw-semibold user-name">{firstName + " " + lastName} </p> </td>
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