import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
          <NavLink to="/">home</NavLink>
          <NavLink to="/myProducts">mis productos</NavLink>
        </nav>
      );
}

export default Navbar;