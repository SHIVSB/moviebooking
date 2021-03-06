const express = require("express");
let router = express.Router();
const genreController = require("../controllers/genre.controller");

router.get("/", genreController.findAllGenres);

module.exports = router;
