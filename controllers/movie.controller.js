const Movies = require("../models/movie.model");
const movieController = {};

movieController.getallmovies = async (req, res) => {
  let responseData = {
    msg: "Error in fetching all movies",
    success: false,
    result: "",
  };

  try {
    const movies = await Movies.find({});

    responseData.msg = "movies fetched successsfully";
    responseData.success = true;
    responseData.result = movies;

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all movies");

    return res.status(500).send(responseData);
  }
};

module.exports = movieController;
