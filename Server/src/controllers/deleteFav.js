const { Favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({
      where: { id },
    });

    allFav = await Favorite.findAll();

    res.status(200).json(allFav);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFav;
