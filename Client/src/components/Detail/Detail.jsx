import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Detail.modules.css";

const URL_BASE = "/rickandmorty/character";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}`)
      .then((response) => response.data)
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className="container-detail">
      <div className="text-detail">
        <h1>{character?.name}</h1>
        <h2>Status: {character?.status}</h2>
        <h2>Specie: {character?.species}</h2>
        <h2>Gender: {character?.gender}</h2>
        <h2>Origin: {character?.origin?.name}</h2>
      </div>
      <div className="img-detail">
        <img src={character?.image} alt={character?.name} />
      </div>
    </div>
  );
};

export default Detail;
