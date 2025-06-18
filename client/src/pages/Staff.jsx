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
  const [addUserModalOpen, setAddUserModalOpen] = useState(false);

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
          {/* Add user button */}
          <div className="p-4">
            <button
              className="bg-green-700 text-white px-4 py-2 rounded"
              onClick={() => setAddUserModalOpen(true)}
            >
              Add User
            </button>
          </div>
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
        {/* Add User Modal */}
        {addUserModalOpen && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-1/3">
              <h2 className="text-xl mb-4">Add User</h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />

                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />

                  <label className="block mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add User
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;
