import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

const PublicAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicAuth;
