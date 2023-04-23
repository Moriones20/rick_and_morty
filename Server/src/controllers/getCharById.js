const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
  axios(`${URL}/${req.params.id}`)
    .then((response) => response.data)
    .then(
      ({ id, status, name, species, origin, image, gender }) => {
        res.status(200).json({
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        });
      },
      () => {
        res.writeHead(404, { "Content-type": "text/plain" }).end("Not found");
      }
    )
    .catch((err) => {
      res.writeHead(404, { "Content-type": "text/plain" }).end(err.message);
    });
};

module.exports = getCharById;
