const Movies = require("../models/movie.model");
const movieController = {};

movieController.findallmovies = async (req, res) => {
  let responseData = {
    msg: "Error in fetching all movies",
    success: false,
    result: "",
  };

  try {
    const movies = await Movies.find({});

    responseData.msg = "movies fetched successsfully";
    responseData.success = true;
    responseData.movies = movies;

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all movies");

    return res.status(500).send(responseData);
  }
};

movieController.findOne = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the movie details",
    success: false,
    result: "",
  };

  const { id } = req.params;

  try {
    const movie = await Movies.find({ movieid: id });

    responseData.msg = "movie details fetched successsfully";
    responseData.success = true;
    responseData.movies = movie;

    // console.log(movies);

    return res.status(200).send(movie);
  } catch (error) {
    console.log("Error in fetching the movie details");

    return res.status(500).send(responseData);
  }
};

movieController.findShows = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the show details",
    success: false,
    result: "",
  };

  const { id } = req.params;

  try {
    const response = await Movies.find({ movieid: id });

    responseData.msg = "show details fetched successsfully";
    responseData.success = true;
    responseData.response = response;

    // console.log(shows);

    return res.status(200).send(response);
  } catch (error) {
    console.log("Error in fetching the show details");

    return res.status(500).send(responseData);
  }
};

movieController.published = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the movie details by status",
    success: false,
    result: "",
  };

  try {
    const movies = await Movies.find({ published: true });

    responseData.msg = "movie details fetched by status successsfully ";
    responseData.success = true;
    responseData.result = movies;

    // console.log(movies);

    return res.status(200).send(movies);
  } catch (error) {
    console.log("Error in fetching the movie details by status");

    return res.status(500).send(error);
  }
};

movieController.released = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the movie details by status",
    success: false,
    result: "",
  };

  try {
    const movies = await Movies.find({ released: true });

    responseData.msg = "movie details fetched by status successsfully ";
    responseData.success = true;
    responseData.result = movies;

    // console.log(movies);

    return res.status(200).send(movies);
  } catch (error) {
    console.log("Error in fetching the movie details by status");

    return res.status(500).send(error);
  }
};

module.exports = movieController;
