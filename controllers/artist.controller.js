const Artists = require("../models/artist.model");
const artistController = {};

artistController.getallartists = async (req, res) => {
  let responseData = {
    msg: "Error in fetching all artists",
    success: false,
    result: "",
  };

  try {
    const artists = await Artists.find({});

    responseData.msg = "Artists fetched successsfully";
    responseData.success = true;
    responseData.result = artists;

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching all artists");

    return res.status(500).send(responseData);
  }
};

module.exports = artistController;
