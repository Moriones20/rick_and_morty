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

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "da4ba5cd3490.59e6f604f33068f4df34";

const EMAIL = "Felipe@gmail.com";
const PASSWORD = "felipe0608";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  
  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
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
      {location.pathname !== "/" && <Nav/>}
      <Routes>
        <Route
          path="/home"
          element={
            <Cards characters={characters} onClose={onClose} logout={logout} onSearch={onSearch}/>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
