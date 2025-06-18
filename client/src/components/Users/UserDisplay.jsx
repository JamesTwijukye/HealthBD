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
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      
    </div>
  );
};

export default UserDisplay;
