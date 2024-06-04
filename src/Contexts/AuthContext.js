import React, { useState, createContext, useContext } from "react";
const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const staticEmail = "admin@example.com";
const staticPassword = "password123";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
 

  const login = (email, password) => {
    if (email === staticEmail && password === staticPassword) {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Invalid email or password");
    }
  };

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ login, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
