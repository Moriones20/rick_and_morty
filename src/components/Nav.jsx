import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Nav = ({ onSearch, logout }) => {
  return (
    <nav>
      <NavLink to={"/about"}>
        <button>About</button>
      </NavLink>

      <NavLink to={"/home"}>
        <button>Home</button>
      </NavLink>

      <NavLink to={"/"}>
        <button logout={logout}>Logout</button>
      </NavLink>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
