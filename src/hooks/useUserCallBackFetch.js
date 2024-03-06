import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useUserCallBackFetch = () => {

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

    return [users, setUsers];
};

export default useUserCallBackFetch;