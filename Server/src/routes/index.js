const { Router } = require("express");
const router = Router();

const getCharacter = require("./getCharacter");
const login = require("./login");
const favorites = require("./favorites");

router.use("/character", getCharacter);
router.use("/login", login);
router.use("/fav", favorites);


module.exports = router;
