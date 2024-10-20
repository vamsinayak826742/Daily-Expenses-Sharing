import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await axios.get('http://localhost:8080/users');
            setUsers(response.data);
        };
        fetchUsers();
    }, []);

    const handleUserAdded = (newUser) => {
        setUsers([...users, newUser]);
    };

    return (
        <div className="container mt-5">
            <h2>User Management</h2>
            <UserForm onUserAdded={handleUserAdded} />
            <UserList users={users} />
        </div>
    );
};

export default UserPage;
