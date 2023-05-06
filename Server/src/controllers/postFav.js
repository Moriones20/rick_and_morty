const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { id, name, species, gender, origin, status, image,   } = req.body;

    if (!name || !origin || !image || !species || !gender) {
      return res.status(401).json({ error: "Faltan datos" });
    }

    const character = { id, name, origin, status, image, species, gender };
    const created = await Favorite.create(character);

    if (created) {
      const favorites = await Favorite.findAll();
      return res.status(200).json(favorites);
    } else {
      return res
        .status(400)
        .json({ message: "Personaje ya existe en favoritos" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = postFav;
