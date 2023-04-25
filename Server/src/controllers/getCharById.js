const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { data } = await axios(`${URL}/${req.params.id}`);
    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
    };
    if (!character) return res.status(404).json();
    return res.status(200).json(character);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getCharById;
