
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [user, setUser] = useState({ name: '', photo: '' });

 return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
