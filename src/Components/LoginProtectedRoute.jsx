import { Navigate } from "react-router-dom";

const LoginProtectedRoute = ({ isLogin, children }) => {
  // Not logged in → Redirect to Login
  if (!isLogin) {
    return <Navigate to="/" replace />;
  }

  // Logged in → Render child content
  return children;
};

export default LoginProtectedRoute;
