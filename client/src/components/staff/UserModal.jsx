


const UserModal = ({ formData, handleChange, handleSubmit, handleClose }) => {
 
  return (
    <div  className="flex justify-center items-center z-50 fixed inset-0 bg-black bg-opacity-40">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg w-96 shadow-lg relative"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-green-600">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-3 rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 mb-4 rounded"
          required
        />

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={handleClose}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
