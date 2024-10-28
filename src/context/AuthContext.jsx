// AuthContext.js

import React, { createContext, useContext, useState, useEffect } from "react";
import authService from "../appwrite/auth"; // Adjust path as needed
// import { useNavigate } from "react-router-dom";

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   const navigate = useNavigate();

  // Fetch the current user when the app loads
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const currentUser = await authService.getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentUser();
  }, []);

  // Login function
  const login = async ({ email, password }) => {
    try {
      const session = await authService.login({ email, password });
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      //   navigate("/"); // Redirect to home after login
      return session;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  // Signup function
  const signup = async (email, password, name, role) => {
    try {
      await authService.createAccount({ email, password, name, role });
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      //   navigate("/"); // Redirect to home after signup
    } catch (error) {
      console.error("Signup failed:", error);
      throw error;
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
      //   navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Provide the context values
  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the AuthContext
export const useAuth = () => useContext(AuthContext);
