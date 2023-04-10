import { NavLink, useLocation } from "react-router-dom";
import "./Nav.modules.css";

const Nav = ({ logout }) => {
  const location = useLocation();

  return (
    <nav>
      {location.pathname !== "/home" && (
        <NavLink to={"/home"}>
          <button className="navButton">Home</button>
        </NavLink>
      )}

      {location.pathname !== "/about" && (
        <NavLink to={"/about"}>
          <button className="navButton">About</button>
        </NavLink>
      )}

      <NavLink to={"/"}>
        <button logout={logout} className="navButton">
          Logout
        </button>
      </NavLink>
    </nav>
  );
};

export default Nav;
