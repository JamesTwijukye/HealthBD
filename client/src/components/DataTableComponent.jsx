import { useState } from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = () => {
  const initialData = [
    {
      id: 1,
      name: "Twijukye james",
      age: 27,
      email: "jimTj@gmail.com",
    },
    {
      id: 1,
      name: "Sabitti Pascal",
      age: 27,
      email: "PascalTj@gmail.com",
    },
    {
      id: 1,
      name: "Aine Smith",
      age: 27,
      email: "SmithTj@gmail.com",
    },
    {
      id: 1,
      name: "Twijukye james",
      age: 27,
      email: "jimTj@gmail.com",
    },
    {
      id: 1,
      name: "Sabitti Pascal",
      age: 27,
      email: "PascalTj@gmail.com",
    },
    {
      id: 1,
      name: "Aine Smith",
      age: 27,
      email: "SmithTj@gmail.com",
    },
  ];
  // Handle Edit

  const [data, setData] = useState(initialData);
  const handleEdit = (row) => {
    const updatedData = data.map((item) =>
      item.id === row.id
        ? { ...item, name: `${item.name} (Edited)` } // Example: Update name with "(Edited)"
        : item
    );
    setData(updatedData);
    alert(`Edited user: ${row.name}`);
  };

  // Handle Delete
  const handleDelete = (row) => {
    const updatedData = data.filter((item) => item.id !== row.id);
    setData(updatedData);
    alert(`Deleted user: ${row.name}`);
  };

  const columns = [
    {
      name: "Tittle",
      selector: (row) => row.name,

      sortable: true,
    },

    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <button onClick={() => handleAdd(row)} style={addButtonStyle}>
            Add User
          </button>

          <button onClick={() => handleEdit(row)} style={buttonStyle}>
            Edit
          </button>

          <button onClick={() => handleDelete(row)} style={deletebuttonStyle}>
            Delete
          </button>
        </div>
      ),
      width: "200px",
    },
  ];

  const buttonStyle = {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    padding: "5px 4px",
    borderRadius: "5px",
    cursor: "pointer",
    height: "25px", // Adjust height
    width: "60px", // Adjust width
  };

  const deletebuttonStyle = {
    backgroundColor: "green",
    padding: "5px 4px",
    borderRadius: "5px",
    cursor: "pointer",
    height: "25px", // Adjust height
    width: "60px", // Adjust width
  };

  const addButtonStyle = {
    backgroundColor: "brown",
    padding: "5px 4px",
    borderRadius: "5px",
    cursor: "pointer",
    height: "25px", // Adjust height
    width: "60px", // Adjust width
  };

  // Handle Add
  const handleAdd = () => {
    const newId = data.length + 1;
    const newRow = {
      id: newId,
      name: `New User ${newId}`,
      age: 20 + newId,
      email: `new.user${newId}@example.com`,
    };
    setData([...data, newRow]);
  };

  const customStyles = {
    table: {
      style: {
        height: "100%",
        width: "100%",
      },
    },

    rows: {
      style: {
        minHeight: "5px",
      },
    },
    headCells: {
      style: {
        padding: "4px",
        fontSize: "12px",
      },
    },
    cells: {
      style: {
        padding: "5px",
        fontSize: "10px",
      },
    },
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <button
        onClick={() => handleAdd()}
        style={{ buttonStyle, marginBottom: "9px" }}
      >
        Add New User
      </button>
      <DataTable
        Tittle="React-table Example"
        data={data}
        columns={columns}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
};

export default DataTableComponent;
