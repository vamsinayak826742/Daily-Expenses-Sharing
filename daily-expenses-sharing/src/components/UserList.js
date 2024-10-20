import React from 'react';

const UserList = ({ users }) => {
    return (
        <div className="mt-4">
            <h4>User List</h4>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">
                        {user.name} - {user.email} - {user.mobile}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
