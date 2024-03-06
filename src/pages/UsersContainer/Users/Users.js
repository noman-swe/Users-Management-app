import React, { useCallback, useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import axios from 'axios';
import User from '../User/User';

const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchUser = useCallback(async () => {
        const response = await axios.get('https://dummyjson.com/users');
        if (response.status === 200) {
            setUsers(response.data.users)
        }
    }, []);

    useEffect(() => {
        fetchUser()
    }, [fetchUser])

    return (
        <div className='w-100'>
            <CardGroup className='w-75 mx-auto row-cols-3'>
                {
                    /* users ?
                        users.map((user, i) => {
                            return <>
                                <User key={i} {...user}></User>
                               
                            </>
                           
                        })
                        : "loading" */

                    users.map(user => <User key={user.id} user={user} ></User>)
                }
            </CardGroup>
        </div>
    );
};

export default Users;