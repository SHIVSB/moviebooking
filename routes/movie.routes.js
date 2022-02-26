const express = require("express");
let router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/", movieController.findallmovies);
router.get("/:id", movieController.findOne);
router.get("/showdetails/:id", movieController.findShows);
router.get("/?status=PUBLISHED", movieController.published);
router.get("/?status=RELEASED", movieController.released);

module.exports = router;
