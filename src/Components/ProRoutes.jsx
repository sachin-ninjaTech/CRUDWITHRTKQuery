import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated ", isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  return children;
};

export default ProtectedRoute;
