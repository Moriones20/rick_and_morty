const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: "Faltan datos" });
    }

    const character = { id, name, origin, status, image, species, gender };
    const [created] = await Favorite.findOrCreate({ where: character });

    if (created) {
      const favoritos = await Favorite.findAll();
      return res.status(200).json(favoritos);
    } else {
      return res
        .status(409)
        .json({ message: "Personaje ya existe en favoritos" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postFav;
