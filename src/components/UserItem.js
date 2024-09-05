import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
    return (
        <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default UserItem;
