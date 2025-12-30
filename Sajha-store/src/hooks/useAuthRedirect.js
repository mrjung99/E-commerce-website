import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const useAuthRedirect = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const redirectToLogin = (path) => {
    navigate("/login", { state: { from: path }, replace: true });
  };

  const redirectAfterLogin = (path) => {
    if (isAuthenticated) {
      navigate(path, { replace: true });
    } else {
      navigate("/");
    }
  };

  return {
    isAuthenticated,
    redirectAfterLogin,
    redirectToLogin,
  };
};

export default useAuthRedirect;
