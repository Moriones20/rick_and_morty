import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://localhost:3001";

const URL_BASE = "/rickandmorty/character";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = "/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      throw new Error(error);
    }
  };

  const onSearch = async (id) => {
    try {
      const { data } = await axios(`${URL_BASE}/${id}`);
      setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      window.alert("¡No hay personajes con este ID!");
    }
  };

  const onClose = (id) => {
    const charactersFiltered = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(charactersFiltered);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const logout = () => {
    setAccess(false);
  };

  return (
    <div className="App">
      {location.pathname !== "/" && <Nav />}
      <Routes>
        <Route
          path="/home"
          element={
            <Cards
              characters={characters}
              onClose={onClose}
              logout={logout}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
