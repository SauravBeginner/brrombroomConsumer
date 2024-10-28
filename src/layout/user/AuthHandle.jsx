import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Loader from "../../components/Loader";

const AuthHandle = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading)
    return (
      <div>
        <Loader />
      </div>
    );
  return !!user ? <>{children}</> : <Navigate to="/login" />;
};

export default AuthHandle;
