import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Staff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/auth/fetchUsers");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      {/* Header */}
      <Header />
      {/* Lower body section */}
      <div className="h-full w-full flex items-start">
        {/* Sidebar */}
        <div className="h-full w-1/4 border-gray-100 ">
          <Sidebar />
        </div>

        {/* Main body */}
        <div className="w-full h-full overflow-y-auto">
          {/* Table */}
          <table className="w-full h-full border-collapse m-10">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="p-2 border border-gray-300">{user.name}</td>
                  <td className="p-2 border border-gray-300">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff;
