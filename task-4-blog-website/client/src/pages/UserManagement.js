import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserManagement.css";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [savingUser, setSavingUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  // track pending role changes per user
  const [roleUpdates, setRoleUpdates] = useState({});

  // ⚠️ If your schema only allows user/admin, limit to these two
  const roles = ["user", "admin", "moderator", "editor"];

  const getConfig = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchUsers = async () => {
    setErrorMsg("");
    try {
      const res = await axios.get("/api/users", getConfig());
      setUsers(res.data);
      const init = {};
      res.data.forEach(u => (init[u._id] = u.role));
      setRoleUpdates(init);
    } catch (err) {
      setErrorMsg(err?.response?.data?.msg || "Failed to load users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRole = async (userId) => {
    setErrorMsg(""); setSuccessMsg("");
    try {
      await axios.put(`/api/users/${userId}/role`, { role: roleUpdates[userId] }, getConfig());
      setSuccessMsg("Role updated.");
      fetchUsers();
    } catch (err) {
      setErrorMsg(err?.response?.data?.msg || "Failed to update role.");
      console.error(err);
    }
  };

  const handleDeleteUser = async (userId) => {
    setErrorMsg(""); setSuccessMsg("");
    try {
      await axios.delete(`/api/users/${userId}`, getConfig());
      setSuccessMsg("User deleted.");
      fetchUsers();
    } catch (err) {
      setErrorMsg(err?.response?.data?.msg || "Failed to delete user.");
      console.error(err);
    }
  };

  const handleAddUser = async () => {
    setErrorMsg(""); setSuccessMsg("");
    if (!newUser.username.trim() || !newUser.email.trim() || !newUser.password.trim()) {
      setErrorMsg("Please fill username, email and password.");
      return;
    }
    setSavingUser(true);
    try {
      await axios.post("/api/users", newUser, getConfig());
      setSuccessMsg("User added.");
      setNewUser({ username: "", email: "", password: "", role: "user" });
      setShowAddUserModal(false);
      fetchUsers();
    } catch (err) {
      setErrorMsg(err?.response?.data?.msg || "Failed to add user.");
      console.error(err);
    } finally {
      setSavingUser(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <div className="user-management-container">
      <div className="header-actions">
        <h2 className="page-title">User Management</h2>
        <button
          type="button"
          onClick={() => setShowAddUserModal(true)}
          className="add-user-btn"
        >
          Add User
        </button>
      </div>

      {errorMsg && (
        <div style={{marginBottom: 10, padding: 10, borderRadius: 6, background: "#ffe8e8", color: "#a10000"}}>
          {errorMsg}
        </div>
      )}
      {successMsg && (
        <div style={{marginBottom: 10, padding: 10, borderRadius: 6, background: "#e8fff0", color: "#0b7a2a"}}>
          {successMsg}
        </div>
      )}

      {showAddUserModal && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close-btn"
              onClick={() => setShowAddUserModal(false)}
            >
              &times;
            </span>
            <h2>Add New User</h2>

            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                placeholder="Enter username"
                value={newUser.username}
                onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label>Role</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role.charAt(0).toUpperCase() + role.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAddUser}
              className="modal-submit-btn"
              disabled={savingUser}
            >
              {savingUser ? "Saving..." : "Save User"}
            </button>
          </div>
        </div>
      )}

      <div className="table-wrapper">
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Change Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                      <select
                        className="role-select"
                        value={roleUpdates[user._id] ?? user.role}
                        onChange={(e) =>
                          setRoleUpdates({ ...roleUpdates, [user._id]: e.target.value })
                        }
                      >
                        {roles.map((role) => (
                          <option key={role} value={role}>
                            {role.charAt(0).toUpperCase() + role.slice(1)}
                          </option>
                        ))}
                      </select>
                      <button
                        className="update-role-btn"
                        onClick={() => handleUpdateRole(user._id)}
                      >
                        Update
                      </button>
                    </div>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "15px" }}>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
