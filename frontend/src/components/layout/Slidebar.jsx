import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";

export default function Sidebar() {
  const user = getCurrentUser();

  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ minHeight: "100vh" }}>
      <h3 className="mb-4">CreatorMitra</h3>
      <ul className="nav nav-pills flex-column">
        {user?.role === "user" && (
          <>
            <li className="nav-item"><Link className="nav-link" to="/dashboard">📊 Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/content">📂 Content</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/settings">⚙️ Settings</Link></li>
          </>
        )}
        {user?.role === "admin" && (
          <>
            <li className="nav-item"><Link className="nav-link" to="/admin">🛠 Admin Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin/users">👥 Manage Users</Link></li>
          </>
        )}
      </ul>
    </div>
  );
}
