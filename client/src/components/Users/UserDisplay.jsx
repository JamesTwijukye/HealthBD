
const UserDisplay = ({ users, loading, error, fetchUsers }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto p-4">
      <button
        onClick={fetchUsers}
        className="bg-green-600 text-white p-2 rounded mb-4 w-[30%] font-sans font-semibold text-lg"
      >
        Load Users
      </button>

      {loading && <p>Loading users ...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <table
        style={{
          borderCollapse: 'collapse',
          width: '100%',
          border: '5px solid green',
        }}
      >
        <thead style={{ backgroundColor: '#f2f2f2' }}>
          <tr>
            <th
              style={{
                padding: '8px',
                textAlign: 'left',
                border: '3px solid green',

              }}
            >
              Name
            </th>
            <th
              style={{
                padding: '8px',
                textAlign: 'left',
                border: '3px solid green',
              }}
            >
              Email
            </th>
            <th
              style={{
                padding: '8px',
                textAlign: 'left',
                border: '3px solid green',
              }}
            >
              User ID
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td style={{ padding: '8px', border: '3px solid green' }}>
                {user.name}
              </td>
              <td style={{ padding: '8px', border: '3px solid green' }}>
                {user.email}
              </td>
              <td style={{ padding: '8px', border: '3px solid green' }}>
                {user._id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDisplay;
