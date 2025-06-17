import React from 'react'

export const DeleteUserModal = ({ userId, setUserId, handleDelete, handleClose }) => {

    
  return (
    <div className="flex justify-center items-center z-50 fixed inset-0 bg-black bg-opacity-40">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDelete();
        }}
        className="bg-white p-6 rounded-lg w-96 shadow-lg relative"
      >
        <h2 className="text-xl font-bold mb-4 text-center text-green-600">Delete User</h2>

        <input
          type="text"
          placeholder="Enter User ID to delete"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
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
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}
