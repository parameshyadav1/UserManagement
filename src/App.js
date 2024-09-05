import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

function App() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get(API_URL);
            setUsers(response.data);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const createUser = async (user) => {
        try {
            const response = await axios.post(API_URL, user);
            setUsers([...users, response.data]);
        } catch (error) {
            console.error("Error creating user:", error);
        }
    };

    const updateUser = async (user) => {
        try {
            const response = await axios.put(`${API_URL}/${user.id}`, user);
            setUsers(users.map(u => (u.id === user.id ? response.data : u)));
            setEditingUser(null);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    return (
        <div className="App">
            <h1>User Management</h1>
            <UserForm onSubmit={editingUser ? updateUser : createUser} initialData={editingUser} />
            <UserList users={users} onEdit={setEditingUser} onDelete={deleteUser} />
        </div>
    );
}

export default App;
