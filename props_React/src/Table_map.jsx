import { useState } from "react";

function Table_map() {
  // Static data
  const staticUsers = [
    { id: 1, name: "Babar", age: 25 },
    { id: 2, name: "Ali", age: 30 },
    { id: 3, name: "Sara", age: 22 },
  ];

  // Dynamic data
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    if (!name || !age) return;

    const newUser = {
      id: users.length + 1,
      name,
      age,
    };

    setUsers([...users, newUser]);  // spread operator to add new user
    setName("");
    setAge("");
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Static table */}
      <h2>📋 Static User Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {staticUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for dynamic data */}
      <h2 style={{ marginTop: "30px" }}> Add Dynamic User</h2>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Dynamic table */}
      <h2>📋 Dynamic User Table</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table_map;
