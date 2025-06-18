import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { BACKEND_URL } from "../utils/index.jsx";
import { toast } from "sonner";
const Staff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/fetchUsers`);
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
      toast.error(err.message);
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
        <div className="w-full overflow-y-auto">
          {/* Table */}
          <table className="w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading && (
                <tr>
                  <td colSpan="2" className="p-2 text-center">
                    Loading...
                  </td>
                </tr>
              )}
              {users.length == 0 ? (
                <tr>
                  <td colSpan="2" className="p-2 text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td className="p-2 border border-gray-300">{user.name}</td>
                    <td className="p-2 border border-gray-300">{user.email}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Staff;
