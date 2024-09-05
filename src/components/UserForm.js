import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData }) => {
    const [user, setUser] = useState({ name: '', email: '', phone: '' });

    useEffect(() => {
        if (initialData) {
            setUser(initialData);
        } else {
            setUser({ name: '', email: '', phone: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{initialData ? 'Edit User' : 'Create User'}</h2>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type="submit">{initialData ? 'Update' : 'Create'}</button>
        </form>
    );
};

export default UserForm;
