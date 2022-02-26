const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
    },
    email: {
      type: String,
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
    username: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      requied: true,
    },
    role: {
      type: String,
      default: "user",
    },
    isLoggedIn: {
      type: Boolean,
      default: false,
    },
    uuid: {
      type: String,
    },
    accesstoken: {
      type: String,
    },
    coupens: [],
    bookingRequests: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//before saving in database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  //console.log(this);
  //hashpassword

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//match password over here methods basically exports the isPasswordMAtched function
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
