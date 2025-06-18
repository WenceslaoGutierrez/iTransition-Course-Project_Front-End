import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import * as authService from '../services/authService';
import * as userService from '../services/userService';

interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<any>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setAuthenticatedState = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const clearAuthenticatedState = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };

  const handleAuthError = (error: any) => {
    console.error(error);
    clearAuthenticatedState();
    throw error;
  };

  const tryTokenValidation = async () => {
    try {
      const response = await userService.getMe();
      setAuthenticatedState(response.data);
    } catch (error) {
      clearAuthenticatedState();
    }
  };
  const checkSession = useCallback(async () => {
    setIsLoading(true);
    const token = authService.getToken();
    if (token) await tryTokenValidation();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  const login = async (email: string, password: string) => {
    try {
      const data = await authService.login(email, password);
      setAuthenticatedState(data.user);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const register = async (firstName: string, lastName: string, email: string, password: string) => {
    return authService.register(firstName, lastName, email, password);
  };
  const logout = () => {
    clearAuthenticatedState();
  };
  const value = { user, isAuthenticated, isLoading, login, register, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside an AuthProvider');
  }
  return context;
};
