"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// AuthProvider: Es un componente que provee un contexto para todos los componentes hijos
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  const login = (username, password) => {
    if (username !== "emipe" || password !== "1234") {
      setIsLoggedIn(false);
      return false;
    }

    setUser(username);
    setIsLoggedIn(true);
    return true;
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
