import { CardGroup } from 'react-bootstrap';
import User from '../User/User';
import useUserCallBackFetch from '../../../hooks/useUserCallBackFetch';

const Users = () => {
    const [users] = useUserCallBackFetch();

    return (
        <CardGroup className='w-75 mx-auto mt-4 row-cols-3'>
            {
                users ?
                    users.map(user => <User
                        key={user.id}
                        user={user}
                    ></User>) : 'loading'
            }
        </CardGroup>
    );
};

export default Users;