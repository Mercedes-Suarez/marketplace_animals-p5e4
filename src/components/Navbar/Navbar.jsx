import { NavLink } from "react-router-dom";
import "./navbar.css";
import Search from "../Search/Search";
import { useAuth } from '../context/AuthContext.js';

const Navbar = () => {
  
  const { isLoggedIn, user } = useAuth();


  return (
    <nav className="navbar">

      <img src="\public\images\logooscuro.svg" alt="logo" />

      <section className="menuNavbar">
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/">home</NavLink>
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/catalogueView">catálogo</NavLink>
      </section>

      <section className="loginOptions">
        <img src="\public\images\userIcon.svg" alt="user" />
        {isLoggedIn ? (
          <>
            <span>{user.name}</span>
            <img src={user.photo} alt="Foto de usuario" style={{ height: '40px', width: '40px' }} />
          </>
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
