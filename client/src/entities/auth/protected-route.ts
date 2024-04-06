import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("access_token") || "{}");
    if (!token) {
      navigate("/signin");
    }
  }, []);

  return children;
};
