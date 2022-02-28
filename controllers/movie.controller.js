const Movies = require("../models/movie.model");
const movieController = {};

//controller to find all movies
movieController.findallmovies = async (req, res) => {
  //creating a responsedata for sending details in a better way
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

//controller to find a single movie based on the movie ID
movieController.findOne = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the movie details",
    success: false,
    result: "",
  };

  //accepting the id of the movie via parameters
  const { id } = req.params;

  try {
    //find the movie using find method of mongo
    const movie = await Movies.find({ movieid: id });

    responseData.msg = "movie details fetched successsfully";
    responseData.success = true;
    responseData.movies = movie;

    // console.log(movies);

    //sending the received movie response
    return res.status(200).send(movie);
  } catch (error) {
    console.log("Error in fetching the movie details");

    //sending the error response
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
