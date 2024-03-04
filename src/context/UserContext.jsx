// UserContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [email, setEmail] = useState('');
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 const logout = () => {
    setEmail('');
    setIsAuthenticated(false);
 };

 return (
    <UserContext.Provider value={{ email, setEmail, isAuthenticated, setIsAuthenticated, logout }}>
      {children}
    </UserContext.Provider>
 );
};

UserProvider.propTypes = {
 children: PropTypes.node,
};
