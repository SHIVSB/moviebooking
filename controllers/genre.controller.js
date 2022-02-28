const Genres = require("../models/genre.model");
const genreController = {};

//finding all genres
genreController.findAllGenres = async (req, res) => {
  //creating the response data
  let responseData = {
    msg: "Error in fetching all Genres",
    success: false,
    result: "",
  };

  try {
    //find all genres using the find method
    const genres = await Genres.find({});

    responseData.msg = "Genres fetched successsfully";
    responseData.success = true;
    responseData.genres = genres;

    //sending the genres response data
    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all Genres");

    //sending the error response
    return res.status(500).send(responseData);
  }
};

module.exports = genreController;
