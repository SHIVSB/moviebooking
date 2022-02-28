const Artists = require("../models/artist.model");
const artistController = {};

//controller to find all artists
artistController.findAllartists = async (req, res) => {
  //creating the response data
  let responseData = {
    msg: "Error in fetching all artists",
    success: false,
    result: "",
  };

  try {
    //using find method to find all artists
    const artists = await Artists.find({});

    responseData.msg = "Artists fetched successsfully";
    responseData.success = true;
    responseData.artists = artists;

    //sending the artists data
    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all artists");

    //sending the error response
    return res.status(500).send(responseData);
  }
};

module.exports = artistController;
