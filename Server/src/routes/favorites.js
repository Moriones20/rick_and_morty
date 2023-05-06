const { Router } = require("express");
const router = Router();
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");

router.post("/", postFav);
router.delete("/:id", deleteFav);

module.exports = router;
