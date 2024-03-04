import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
 const [email, setEmail] = useState('');
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 return (
    <UserContext.Provider value={{ email, setEmail, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
 );
};

// Mover la asignación de propTypes después de la definición de UserProvider
UserProvider.propTypes = {
 children: PropTypes.node,
};
