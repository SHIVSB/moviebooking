var createError = require("http-errors");
var express = require("express");
const PORT = 9000 || process.env.PORT;
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var dbConfig = require("./config/db.config");
var dotenv = require("dotenv");
// const { errorHandler, notFound } = require("./src/middlewares/error");
dotenv.config();

// var apiRouter = require("./routes/api");

dbConfig();
var app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/api", apiRouter);
app.use("/movies", require("./routes/movie.routes"));
app.use("/genres", require("./routes/genre.routes"));
app.use("/artists", require("./routes/artist.routes"));
// console.log(process);

//call error handler after all your routes
// app.use(notFound);
// app.use(errorHandler);

app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in starting server ..");
  }

  console.log(`Server started successfully on PORT : ${PORT}`);
});
