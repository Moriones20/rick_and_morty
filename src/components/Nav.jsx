import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom"

const Nav = ({ onSearch }) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <NavLink to={"/about"}>
                <button>About</button>
            </NavLink>
            <NavLink to={"/home"}>
                <button>Home</button>
            </NavLink>
        </nav>
    )
}

export default Nav;