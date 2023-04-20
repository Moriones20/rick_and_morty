const axios = require("axios");

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.data)
    .then((data) => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status,
      };
      return res
        .writeHead(200, { "Content-type": "application/json" })
        .end(JSON.stringify(character));
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-type": "text/plain" })
        .end(error.message);
    });
};

module.exports = {
  getCharById,
};
