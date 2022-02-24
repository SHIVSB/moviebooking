const express = require("express");
let router = express.Router();
const movieController = require("../controllers/movie.controller");

router.get("/", movieController.getallmovies);

module.exports = router;
