import  { useState } from 'react';
import UserDisplay from './UserDisplay';


const UserList = () => {
    const [users, setUsers] = useState([]);     
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null);  
  
    const fetchUsers = async () => {  
      setLoading(true);              
      setError(null);                
  
      try {
        const response = await fetch('http://localhost:5000/auth/fetchUsers');
        if (!response.ok) {
        throw new Error('Failed to fetch users')};

        const data = await response.json();  

        setUsers(data);          

      } catch (err) {
        setError(err.message);   
      }
  
      setLoading(false);        
    };
  
    
    return (
      <UserDisplay
        users={users}
        loading={loading}
        error={error}
        fetchUsers={fetchUsers}
      />
    );
}

export default UserList