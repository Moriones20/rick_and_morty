import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import "./Nav.modules.css"

const Nav = ({ onSearch, logout }) => {
  return (
    <nav>
      <NavLink to={"/home"}>
        <button className="navButton">Home</button>
      </NavLink>
      
      <NavLink to={"/about"}>
        <button className="navButton">About</button>
      </NavLink>

      <SearchBar onSearch={onSearch} />

      <NavLink to={"/"}>
        <button logout={logout} className="navButton">Logout</button>
      </NavLink>
    </nav>
  );
};

export default Nav;
