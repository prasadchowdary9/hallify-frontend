
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "sonner";

// Define user types
type UserRole = 'user' | 'admin';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  resetPassword: (email: string) => Promise<void>;
}

// Mock users for demo purposes
const MOCK_USERS = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123',
    name: 'Regular User',
    role: 'user' as UserRole
  },
  {
    id: '2',
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin' as UserRole
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  // Check if user is already logged in (from localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    // Simulate API call
    const foundUser = MOCK_USERS.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password");
      throw new Error('Invalid credentials');
    }

    // Create user object without password
    const { password: _, ...userWithoutPassword } = foundUser;
    
    // Save to state and localStorage
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    toast.success(`Welcome back, ${userWithoutPassword.name}!`);
    navigate('/dashboard');
  };

  // Signup function
  const signup = async (name: string, email: string, password: string) => {
    // Check if email already exists
    if (MOCK_USERS.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      toast.error("Email already exists");
      throw new Error('Email already exists');
    }

    // In a real app, this would save to a database
    const newUser = {
      id: String(Date.now()),
      email,
      name,
      role: 'user' as UserRole
    };

    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    
    toast.success("Account created successfully!");
    navigate('/dashboard');
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success("Logged out successfully");
    navigate('/');
  };

  // Reset password function
  const resetPassword = async (email: string) => {
    // Check if email exists
    const userExists = MOCK_USERS.some(
      u => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!userExists) {
      toast.error("Email not found");
      throw new Error('Email not found');
    }

    // In a real app, this would send a reset email
    toast.success("Password reset link sent to your email");
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        isAdmin,
        login, 
        signup, 
        logout, 
        resetPassword 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
