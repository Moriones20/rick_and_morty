import { useState } from "react";
import "./SearchBar.modules.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const randomizer = () => {
    const randomId = (Math.floor(Math.random() * 826) + 1).toString();
    setId(randomId);
    onSearch(randomId);
    setId("");
  };

  return (
    <div className="container-searchbar">
      <div className="search">
      <input
        type="search"
        required="required"
        onChange={handleChange}
        value={id}
      />
      <span>Introduzca el id</span>
      <i></i>
      </div>
      <div className="btn">
        <button
          className="btn-agregar"
          onClick={() => {
            onSearch(id);
            setId("");
          }}
        >
          Agregar
        </button>
        <button
          className="btn-random"
          onClick={() => {
            randomizer();
          }}
        >
          Randomizer
        </button>
      </div>
    </div>
  );
}
