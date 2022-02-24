const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    artistid: {
      type: Number,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    wiki_url: {
      type: String,
      required: true,
    },
    proifle_url: {
      type: String,
      required: true,
    },
    movies: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Artist = mongoose.model("Artist", artistSchema);
module.exports = Artist;
