import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { BACKEND_URL } from "../utils/index.jsx";
import { toast } from "sonner";
import Loader from "../components/Loader.jsx";
const Staff = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchUsers, setFetchUsers] = useState(false);

  useEffect(() => {
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
      setFetchUsers(false);
    };

    fetchUsers();
  }, [fetchUsers]);

  const handleDeleteUser = async (userId) => {
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/deleteUser/${userId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("User deleted successfully");
        setFetchUsers(true);
      } else {
        toast.error(result.message || "Failed to delete user");
      }
    } catch (error) {
      toast.error("Server error: " + error.message);
    }
  };

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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {loading ? (
                <tr>
                  <td colSpan="3" className="h-screen text-center">
                    <Loader />
                  </td>
                </tr>
              ) : users.length == 0 ? (
                <tr>
                  <td colSpan="3" className="p-2 text-center">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id}>
                    <td className="p-2 border border-gray-300">{user.name}</td>
                    <td className="p-2 border border-gray-300">{user.email}</td>
                    <td className="p-2 border border-gray-300">
                      <button className="text-blue-500 px-4">Edit</button>
                      <button
                        className="text-red-500 px-4"
                        onClick={() => handleDeleteUser(user._id)}
                      >
                        Delete
                      </button>
                    </td>
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
