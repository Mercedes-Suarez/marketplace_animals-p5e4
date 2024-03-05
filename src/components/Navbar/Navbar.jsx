import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./navbar.css";
import Search from "../Search/Search";
import { useContext, useEffect, useState } from 'react'; // Importa useEffect y useState
import { UserContext } from '../../context/UserContext.jsx'; 

const Navbar = () => {
 const { email, isAuthenticated, logout } = useContext(UserContext);
 const [userName, setUserName] = useState(''); 
 const navigate = useNavigate(); 

 
 const handleLogout = () => {
    logout(); 
    navigate('/'); 
 };

 const navigateToMyProducts = () => {
    navigate('/myProducts'); 
 };

 
 useEffect(() => {
    if (email) {
      setUserName(email.split('@')[0]); // Actualiza el nombre de usuario basado en el email
    } else {
      setUserName(''); // Limpia el nombre de usuario si no hay email
    }
 }, [email]); // Dependencia: email

 console.log("Email:", email); // Verifica el valor de email
 console.log("User Name:", userName); // Verifica el valor de userName

 return (
    <nav className="navbar">
      <img src="\public\images\logooscuro.svg" className="logoNavbar" alt="logo" />

      <section className="menuNavbar">
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/">home</NavLink>
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/catalogueView">catálogo</NavLink>
      </section>

      <section className="loginOptions">
        <img src="\public\images\userIcon.svg" alt="user" />
        {isAuthenticated ? (
          <>
            <span onClick={navigateToMyProducts} className="linktomyProducts">{userName}</span>
            <button onClick={handleLogout}>logout</button>
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
