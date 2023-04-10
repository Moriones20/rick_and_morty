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
      <input
        type="search"
        className="search"
        onChange={handleChange}
        value={id}
      />
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
