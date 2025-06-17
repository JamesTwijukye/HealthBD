// AddUser.js
import { useState } from 'react';
import UserModal from './UserModal.jsx'; 
import { DeleteUserModal } from './DeleteUserModal.jsx';

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState('');

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleOpenDelete = () => setIsDeleteOpen(true);
  const handleCloseDelete = () => {
    setIsDeleteOpen(false);
    setUserIdToDelete('');
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/auth/AddUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (response.ok) {
        alert('User added successfully');
        handleClose();
      } else {
        alert(result.message || 'Failed to add user');
      }
    } catch (error) {
      alert('Sgerver error: ' + error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/auth/deleteUser/${userIdToDelete}`, {
        method: 'DELETE'
      });
      const result = await response.json();
      if (response.ok) {
        alert('User deleted successfully');
        handleCloseDelete();
      } else {
        alert(result.message || 'Failed to delete user');
      }
    } catch (error) {
      alert('Server error: ' + error.message);
    }
  };


  return (
    <div className="w-full h-screen bg-gray-50 relative">
      <button
        className="ml-6 mt-6 cursor-pointer bg-green-600 text-white font-semibold p-4"
        onClick={handleOpen}
      >
        Add User
      </button>
      <button
        className="ml-6 mt-6 cursor-pointer bg-green-600 text-white font-semibold p-4"
        onClick={handleOpenDelete}
      >
        Delete User
      </button>

     

      {isOpen && (
        <UserModal
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
        />
      )}

      {isDeleteOpen && (
              <DeleteUserModal
                userId={userIdToDelete}
                setUserId={setUserIdToDelete}
                handleDelete={handleDeleteUser}
                handleClose={handleCloseDelete}
              />
            )}
    </div>
  );
};

export default AddUser;
