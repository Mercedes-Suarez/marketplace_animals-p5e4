import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext.jsx";
import "./navbar.css";

const Navbar = () => {

  const { searchTerm, setSearchTerm } = useContext(SearchContext);
 
  const handleSearch = (e) => {
     setSearchTerm(e.target.value);
  };

  return (
    <nav className="navbar">

      <img src="\public\images\logooscuro.svg" alt="logo" />

      <section className="menuNavbar">
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/">home</NavLink>
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/catalogueView">catálogo</NavLink>
      </section>

      <section className="loginOptions">
        <img src="\public\images\userIcon.svg" alt="user" />
        <NavLink className="myNavLink" activeClassName="myActiveNavLink" to="/login">login/registro</NavLink>
      </section>

      <section className="cartFind">
        <img src="\public\images\scartIcon.svg" alt="carrito" />
        <NavLink activeClassName="active" to="/cart"></NavLink>
        <input
        type="text"
        placeholder="Buscar productos"
        value={searchTerm}
        onChange={handleSearch}
      />
        
      </section>
    </nav>
  );
};

export default Navbar;
