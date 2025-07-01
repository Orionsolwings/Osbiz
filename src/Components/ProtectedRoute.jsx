import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isVerified = localStorage.getItem("isVerified") === 'true';

  // Not verified → Redirect to Signup
  if (!isVerified) {
    return <Navigate to="/signup" replace />;
  }

  // Verified → Render child content
  return children;
};

export default ProtectedRoute;
