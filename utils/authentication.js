const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_KEY, { expiresIn: "10d" });
};

const authMiddleware = async (req, res, next) => {
  let token;

  if (req.headers.Authorization.startsWith("Basic")) {
    try {
      token = req.headers.Authorization.split(" ")[1];
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        //find the user by id
        const user = await User.findById(decoded.id).select("-password");
        //attach the user to req
        req.user = user;
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("User not authorized");
    }
  } else {

    return res.status(500).send("No authorization token detected");
  }
};

module.exports = { generateToken, authMiddleware };
