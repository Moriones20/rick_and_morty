let myFavorites = [];

const postFav = (req, res) => {
  try {
    character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);

    if (characterFound)
      throw new Error("The character is already in favorites");

    myFavorites.push(character);

    res.status(202).json(myFavorites);
  } catch (error) {
    return res.status(404).send(error.message);
  }
};

const deleteFav = (req, res) => {
  myFavorites = myFavorites.filter((fav) => fav.id != req.params.id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
