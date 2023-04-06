import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "da4ba5cd3490.59e6f604f33068f4df34";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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

  console.log();

  return (
    <div>
      <h2>{character?.name}</h2>
      <h2>{character?.status}</h2>
      <h2>{character?.species}</h2>
      <h2>{character?.gender}</h2>
      <h2>{character?.origin?.name}</h2>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;
