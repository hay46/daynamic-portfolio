import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../../src/service/api'
// // Create the context
// const AuthContext = createContext();

// // Custom hook to use the auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// Auth Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token,setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storetoken = localStorage.getItem('token');
    if (storedUser && storetoken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  //login function 
  
  const login = async(formData)=>{
    try {
        const response = await api.post('/auth/login', formData)
         
        const data = response.data;
        setUser(data.user);
        setToken(data.token);


         localStorage.setItem('user', JSON.stringify(userData));
         localStorage.setItem('token',  data.token);
         return{
            success:true,
    };
            
         
    } catch (error) {
        return{

        
        success:false,
        message:error.response?.data?.message || 'login faild',
    };
};
  };
  const login = async (email, password) => {
    setLoading(true);
    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Mock validation – accept any non-empty email/password
      if (email && password) {
        const userData = { email, name: email.split('@')[0] };
        setUser(userData);
        localStorage.setItem('portfolioUser', JSON.stringify(userData));
        return { success: true };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Mock register function
  const register = async (name, email, password) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Mock registration – always succeeds if fields are provided
      if (name && email && password) {
        const userData = { name, email };
        setUser(userData);
        localStorage.setItem('portfolioUser', JSON.stringify(userData));
        return { success: true };
      } else {
        throw new Error('All fields are required');
      }
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('portfolioUser');
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token')
  };
return(
   <AuthContext.Provider
   value={{
      user,
    loading,
    login,
    logout,
   }}>{children}</AuthContext.Provider>
)
  const value = {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Default export (for backward compatibility)
export default AuthProvider;