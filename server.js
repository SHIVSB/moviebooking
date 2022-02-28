var express = require("express");
const PORT = 8085 || process.env.PORT; // starting the sever on port 8085 and if its not empty
//the process.env.PORT finds a new empty port
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan"); //to see the requests in the terminal
var cors = require("cors"); // cross origin resource sharing
var dbConfig = require("./config/db.config"); // requiring the database configuration
var dotenv = require("dotenv"); // creating the dotenv file to store the important information
// const { errorHandler, notFound } = require("./src/middlewares/error");
dotenv.config();

dbConfig();
var app = express();

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

//creating the base response
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Upgrad Movie booking application development.",
  });
});

//connecting with the movie router
app.use("/api/movies", require("./routes/movie.routes"));
//connecting with the genres router
app.use("/api/genres", require("./routes/genre.routes"));
//connecting with the artists router
app.use("/api/artists", require("./routes/artist.routes"));
//connecting with the user router
app.use("/api/auth", require("./routes/user.routes"));
// console.log(process);

//to listen on the port provided
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in starting server ..");
  }

  console.log(`Server started successfully on PORT : ${PORT}`);
});
