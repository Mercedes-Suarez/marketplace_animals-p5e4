import { NavLink } from "react-router-dom";
import "./navbar.css";
import Search from "../Search/Search";
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.jsx'; 
const Navbar = () => {
  const { email, isAuthenticated } = useContext(UserContext);
  const userName = email ? email.split('@')[0] : '';
  
  return (
    <nav className="navbar">

      <img src="\public\images\logooscuro.svg" alt="logo" />

      <section className="menuNavbar">
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/">home</NavLink>
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/catalogueView">catálogo</NavLink>
      </section>

      <section className="loginOptions">
        <img src="\public\images\userIcon.svg" alt="user" />
        {isAuthenticated ? (
          <span>{userName}</span>
        ) : (
          <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/login">login/registro</NavLink>
        )}
      </section>

      <section className="cartFind">
        <img src="\public\images\scartIcon.svg" alt="carrito" />
        <NavLink activeClassName="active" to="/cart"></NavLink>
        <Search/>
        
      </section>
    </nav>
  );
};

export default Navbar;
