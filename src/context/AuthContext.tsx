"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  uid: string;
  email: string;
  displayName: string;
} | null;

interface AuthContextType {
  user: User;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      // Mocked user persistence
      const savedUser = localStorage.getItem('skillgraph_user');
      if (savedUser) setUser(JSON.parse(savedUser));
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const login = () => {
    const mockUser = {
      uid: 'user-123',
      email: 'demo@skillgraph.com',
      displayName: 'Demo User',
    };
    setUser(mockUser);
    localStorage.setItem('skillgraph_user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('skillgraph_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
