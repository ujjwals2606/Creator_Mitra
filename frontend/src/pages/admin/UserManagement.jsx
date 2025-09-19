import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserManagement = () => {
  // Dummy users list
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "user", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "creator", status: "Active" },
    { id: 3, name: "Admin", email: "admin@example.com", role: "admin", status: "Active" },
  ]);

  // Handle delete
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Handle block/unblock
  const handleToggleStatus = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id
          ? { ...user, status: user.status === "Active" ? "Blocked" : "Active" }
          : user
      )
    );
  };

  return (
    <div className="container mt-5">
      <h2>👥 User Management</h2>
      <p className="text-muted">Manage all registered users from this panel.</p>

      <div className="card shadow p-4">
        {users.length === 0 ? (
          <p className="text-muted">No users available.</p>
        ) : (
          <table className="table table-striped align-middle">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.role === "admin" ? "bg-danger" : "bg-info"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "Active" ? "bg-success" : "bg-secondary"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleToggleStatus(user.id)}
                    >
                      {user.status === "Active" ? "Block" : "Unblock"}
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
