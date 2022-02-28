const User = require("../models/user.model");
const auth = require("../utils/authentication");

const userController = {};

userController.signup = async (req, res) => {
  let responseData = {
    msg: "Error in creating the user",
    success: false,
    result: "",
  };
  const { first_name, last_name, email, contact, password } = req.body;
  //check if user exist
  const userExists = await User.findOne({ email });

  if (userExists) throw new Error("User already exists");

  try {
    const newUser = await User.create({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      username: first_name + last_name,
      contact: contact,
    });

    responseData.msg = "User created successfully";
    responseData.success = true;
    responseData.result = newUser;

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("error in creating the user");

    return res.status(500).send(responseData);
  }
};

userController.signin = async (req, res) => {
  let data = req.body;

  let responseData = {
    msg: "Error in signing in the user",
    success: false,
    result: "",
  };

  if (data.username && data.password) {
    try {
      const userFound = await User.findOne({ username: data.username });
      // console.log(data.username);
      //console.log(data.password);

      if (await userFound.isPasswordMatched(data.password)) {
        responseData.msg = "User logged in successfully";
        responseData.success = true;
        responseData.result = userFound;
        responseData.token = auth.generateToken(userFound._id);
        return res.status(200).send(responseData);
      } else {
        return res.status(500).send(responseData);
      }
    } catch (error) {
      console.log("Inavlid email or password");
      responseData.msg = "Invalid email or password";
      return res.status(500).send(responseData);
    }
  } else {
    responseData.msg = "Insufficient data for login";

    return res.status(500).send(responseData);
  }
};

userController.getCouponCode = async (req, res) => {
  let responseData = {
    msg: "Error in fetching the coupon code",
    success: false,
    result: "",
  };

  const { _id } = req.user;
  //   console.log(req.user);
  try {
    const users = await User.findById(_id);

    responseData.msg = "coupon code fetched fetched successsfully ";
    responseData.success = true;
    responseData.result = users.coupens;

    // console.log(users.coupens);

    return res.status(200).send(responseData);
  } catch (error) {
    console.log("Error in fetching the coupon code");

    return res.status(500).send("Error in fetching the coupon code");
  }
};

userController.logout = async (req, res) => {
  try {
    res.clearCookie("authorization");
    // res.redirect("/");
    return res.status(200).send("User logged out successfully");
  } catch (error) {
    return res.status(500).send("Error in logging out the user");
  }
};

module.exports = userController;
