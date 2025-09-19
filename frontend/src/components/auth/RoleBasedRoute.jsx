import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../services/auth";

export default function RoleBasedRoute({ children, role }) {
  const user = getCurrentUser();

  if (!user) return <Navigate to="/login" replace />;
  if (user.role !== role) return <Navigate to="/unauthorized" replace />;

  return children;
}
