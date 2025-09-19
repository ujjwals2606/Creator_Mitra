import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";

// User Pages
import Dashboard from "./pages/user/Dashboard";
import Content from "./pages/user/Content";
import Settings from "./pages/user/Settings";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";

// Components
import ProtectedRoute from "./components/auth/ProtectedRoute";
import RoleBasedRoute from "./components/auth/RoleBasedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Home Page */}
        <Route path="/" element={<h2 className="text-center mt-5">Welcome to CreatorMitra 🚀</h2>} />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* User Routes (Protected) */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <RoleBasedRoute role="user">
                <Dashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <RoleBasedRoute role="user">
                <Content />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <RoleBasedRoute role="user">
                <Settings />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        {/* Admin Routes (Protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <RoleBasedRoute role="admin">
                <AdminDashboard />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <RoleBasedRoute role="admin">
                <UserManagement />
              </RoleBasedRoute>
            </ProtectedRoute>
          }
        />

        {/* Catch-All Route (404 Page) */}
        <Route path="*" element={<h2 className="text-center mt-5">404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
