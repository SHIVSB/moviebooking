const Genres = require("../models/genre.model");
const genreController = {};

genreController.findAllGenres = async (req, res) => {
  let responseData = {
    msg: "Error in fetching all Genres",
    success: false,
    result: "",
  };

  try {
    const genres = await Genres.find({});

    responseData.msg = "Genres fetched successsfully";
    responseData.success = true;
    responseData.genres = genres;

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all Genres");

    return res.status(500).send(responseData);
  }
};

module.exports = genreController;
