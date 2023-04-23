const getCharById = require("../controllers/getCharById");
const handleFavorites = require("../controllers/handleFavorites");
const login = require("../controllers/login");
const { Router } = require("express");
const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", handleFavorites.postFav);
router.delete("/fav/:id", handleFavorites.deleteFav);

module.exports = router;
