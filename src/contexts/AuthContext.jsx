import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from "sonner";
import { USER_ENDPOINTS } from '../api/ApiEndpoints'; // Import user endpoints
import clsx from 'clsx';
import { ClipboardSignature } from 'lucide-react';
import { use } from 'react';

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  const login = async (email, password) => {
    console.log("login method called")
    try {
      const response = await axios.post(USER_ENDPOINTS.LOGIN, { email, password });
      const { token, user } = response.data;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token); // Store JWT token
      localStorage.setItem('userId', user.id); // Store user ID
      localStorage.setItem('userRole', user.role); // Store user role
      localStorage.setItem('userName', user.name); // Store user name
      localStorage.setItem('userEmail', user.email); // Store user email
      
      

      setUser(user);
      console.log(JSON.stringify(user))
      toast.success(`Welcome back, ${user.name}!`);
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
      throw new Error(error.response?.data?.message || 'Invalid credentials');
    }
  };

  // Signup function
  const signup = async (name, email, password) => {
    try {
      const response = await axios.post(USER_ENDPOINTS.SIGNUP, { name, email, password });
      const { token, user } = response.data;

      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('token', token); // Store JWT token

      setUser(user);
      toast.success("Account created successfully!");
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
      throw new Error(error.response?.data?.message || 'Signup error');
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token'); // Remove JWT token
    toast.success("Logged out successfully");
    navigate('/');
  };

  // Reset password function
  const resetPassword = async (email) => {
    try {
      await axios.post(USER_ENDPOINTS.RESET_PASSWORD, { email });
      toast.success("Password reset link sent to your email");
    } catch (error) {
      toast.error(error.response?.data?.message || "Email not found");
      throw new Error(error.response?.data?.message || 'Reset password error');
    }
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'ROLE_ADMIN'; // Adjust based on your role naming convention

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


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "sonner";

// // Mock users for demo purposes
// const MOCK_USERS = [
//   {
//     id: '1',
//     email: 'user@example.com',
//     password: 'password123',
//     name: 'Regular User',
//     role: 'user'
//   },
//   {
//     id: '2',
//     email: 'admin@example.com',
//     password: 'admin123',
//     name: 'Admin User',
//     role: 'admin'
//   }
// ];

// const AuthContext = createContext(undefined);

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   // Check if user is already logged in (from localStorage)
//   useEffect(() => {
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       try {
//         setUser(JSON.parse(storedUser));
//       } catch (error) {
//         console.error('Failed to parse user from localStorage', error);
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   // Login function
//   const login = async (email, password) => {
//     // Simulate API call
//     const foundUser = MOCK_USERS.find(
//       u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
//     );

//     if (!foundUser) {
//       toast.error("Invalid email or password");
//       throw new Error('Invalid credentials');
//     }

//     // Create user object without password
//     const { password: _, ...userWithoutPassword } = foundUser;
    
//     // Save to state and localStorage
//     setUser(userWithoutPassword);
//     localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
//     toast.success(`Welcome back, ${userWithoutPassword.name}!`);
//     navigate('/dashboard');
//   };

//   // Signup function
//   const signup = async (name, email, password) => {
//     // Check if email already exists
//     if (MOCK_USERS.some(u => u.email.toLowerCase() === email.toLowerCase())) {
//       toast.error("Email already exists");
//       throw new Error('Email already exists');
//     }

//     // In a real app, this would save to a database
//     const newUser = {
//       id: String(Date.now()),
//       email,
//       name,
//       role: 'user'
//     };

//     setUser(newUser);
//     localStorage.setItem('user', JSON.stringify(newUser));
    
//     toast.success("Account created successfully!");
//     navigate('/dashboard');
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     toast.success("Logged out successfully");
//     navigate('/');
//   };

//   // Reset password function
//   const resetPassword = async (email) => {
//     // Check if email exists
//     const userExists = MOCK_USERS.some(
//       u => u.email.toLowerCase() === email.toLowerCase()
//     );

//     if (!userExists) {
//       toast.error("Email not found");
//       throw new Error('Email not found');
//     }

//     // In a real app, this would send a reset email
//     toast.success("Password reset link sent to your email");
//   };

//   const isAuthenticated = !!user;
//   const isAdmin = user?.role === 'admin';

//   return (
//     <AuthContext.Provider 
//       value={{ 
//         user, 
//         isAuthenticated, 
//         isAdmin,
//         login, 
//         signup, 
//         logout, 
//         resetPassword 
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
