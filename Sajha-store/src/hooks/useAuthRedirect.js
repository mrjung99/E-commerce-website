import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useAuthRedirect = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const redirectToLogin = (path) => {
    navigate("/login", { state: { from: path }, replace: true });
  };

  const redirectAfterLogin = (path) => {
    navigate(path, { replace: true });
  };

  return {
    isAuthenticated,
    redirectAfterLogin,
    redirectToLogin,
  };
};

export default useAuthRedirect;
