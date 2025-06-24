import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
    user: any, 
    login: Function,
    logout: Function
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(null); // null = not logged in

  const login = (userData:any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
      throw new Error("useEmailContext must be used within an AuthProvider");
    }
    return context;
  };