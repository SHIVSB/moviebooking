const express = require("express");
let router = express.Router();
const artistController = require("../controllers/artist.controller");

router.get("/", artistController.getallartists);

module.exports = router;
