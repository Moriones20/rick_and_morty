let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.json(myFavorites);
};

const deleteFav = (req, res) => {
  myFavorites = myFavorites.filter((fav) => fav.id != req.params.id);
  res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
