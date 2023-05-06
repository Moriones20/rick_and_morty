require("dotenv").config();
const { API_URL } = process.env;
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { data } = await axios(`${API_URL}/${req.params.id}`);
    if (!data.name) throw new Error(`ID: ${req.params.id} Not found`);

    const character = {
      id: data.id,
      name: data.name,
      status: data.status,
      species: data.species,
      gender: data.gender,
      origin: data.origin,
      image: data.image,
    };
    return res.status(200).json(character);
  } catch (error) {
    error.message.includes("ID")
      ? res.status(404).send(error.message)
      : res.status(500).send(error.response.data.error);
  }
};

module.exports = getCharById;
