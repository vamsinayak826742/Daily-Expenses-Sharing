import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, email, mobile };
        try {
            const response = await axios.post('http://localhost:8080/users', user);
            onUserAdded(response.data);
            setName('');
            setEmail('');
            setMobile('');
        } catch (error) {
            console.error("There was an error creating the user!", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Mobile</label>
                <input
                    type="text"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    );
};

export default UserForm;
