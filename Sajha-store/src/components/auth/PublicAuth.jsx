import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const PublicAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) {
    navigate("/", { replace: true });
  }

  return children;
};

export default PublicAuth;
