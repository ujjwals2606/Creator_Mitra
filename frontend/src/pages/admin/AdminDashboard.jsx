import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-dark text-white d-flex flex-column p-3">
          <h3 className="text-center mb-4">Admin Panel</h3>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/admin">
                📊 Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/admin/users">
                👥 User Management
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link className="nav-link text-white" to="/settings">
                ⚙️ Settings
              </Link>
            </li>
            <li className="nav-item mt-3">
              <Link className="btn btn-danger w-100" to="/login">
                🚪 Logout
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <h2>Welcome, Admin 👋</h2>
          <p className="text-muted">
            Here you can manage users, view analytics, and control the platform.
          </p>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Total Users</h5>
                <p className="fs-4 fw-bold text-primary">120</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Active Creators</h5>
                <p className="fs-4 fw-bold text-success">85</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Reports</h5>
                <p className="fs-4 fw-bold text-danger">5</p>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h4>Recent Activities</h4>
            <ul className="list-group">
              <li className="list-group-item">New user registered: John Doe</li>
              <li className="list-group-item">Creator uploaded new video</li>
              <li className="list-group-item">Report submitted by user #42</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
