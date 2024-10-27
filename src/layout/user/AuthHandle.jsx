import React, { useEffect, useState } from "react";
import authService from "../../appwrite/auth";
import { Navigate } from "react-router-dom";

const AuthHandle = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await authService.getCurrentUser();
        setIsAuthenticated(!!user);
      } catch (error) {
        console.error("Authentication failed!", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>loading...</div>;
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default AuthHandle;
