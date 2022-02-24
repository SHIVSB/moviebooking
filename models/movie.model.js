const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const movieSchema = new mongoose.Schema(
  {
    movieid: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    published: {
      type: Boolean,
      required: true,
    },
    released: {
      type: Boolean,
      required: true,
    },
    poster_url: {
      type: String,
      required: true,
    },
    release_date: {
      type: Date,
      required: true,
    },
    publish_date: {
      type: Date,
      required: true,
    },
    artists: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: [true, "Please artist is required"],
    },
    genres: [
      {
        type: String,
      },
    ],
    duration: {
      type: Number,
    },
    critic_rating: {
      type: Number,
    },
    trailer_url: {
      type: String,
      required: true,
    },
    wiki_url: {
      type: String,
      required: true,
    },
    story_line: {
      type: String,
      required: true,
    },
    shows: [
      {
        id: Number,
        theatre: [
          {
            name: String,
            city: String,
          },
        ],
        language: String,
        show_timing: Date,
        available_seats: String,
        unit_price: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
