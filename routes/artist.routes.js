const express = require("express");
let router = express.Router();
const artistController = require("../controllers/artist.controller");

router.get("/", artistController.findAllartists);

module.exports = router;
