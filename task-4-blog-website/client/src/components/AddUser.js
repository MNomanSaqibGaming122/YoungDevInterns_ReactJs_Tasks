// src/components/admin/AddUser.js
import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user', // Default role
    });

    const { name, email, password, role } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post('/api/users', formData);
            alert('User added successfully!');
            // Clear form after successful submission
            setFormData({ name: '', email: '', password: '', role: 'user' });
        } catch (err) {
            console.error(err.response.data);
            alert('Error adding user. Please try again.');
        }
    };

    return (
        <div className="add-user-container">
            <h2>Add New User</h2>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select name="role" value={role} onChange={onChange}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;