const { Router } = require("express");
const router = Router();
const getCharById = require("../controllers/getCharById");

router.get("/:id", getCharById);
router.get("/detail/:id", getCharById);

module.exports = router;
