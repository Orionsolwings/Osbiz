// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isVerified = localStorage.getItem("isVerified") === "true";

  if (!isVerified) {
    return <Navigate to="/signup" replace />;
  }


  return children;
};

export default ProtectedRoute;
