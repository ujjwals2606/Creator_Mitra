import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Unauthorized = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
      <div className="card shadow p-5" style={{ maxWidth: "450px" }}>
        <h1 className="text-danger mb-3">403</h1>
        <h3 className="mb-3">Unauthorized Access 🚫</h3>
        <p className="text-muted">
          You don’t have permission to view this page. Please login with the
          correct account or go back to the homepage.
        </p>
        <div className="d-flex gap-3 justify-content-center mt-4">
          <Link to="/login" className="btn btn-primary">
            🔑 Login
          </Link>
          <Link to="/" className="btn btn-secondary">
            🏠 Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
