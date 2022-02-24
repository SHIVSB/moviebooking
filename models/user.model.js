const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userid: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    lastname: {
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
      required: true,
    },
    isLoggedIn: {
      type: Boolean,
      required: true,
    },
    uuid: {
      tye: String,
    },
    accesstoken: {
      type: String,
    },
    coupens: [
      {
        id: Number,
        discountValue: Number,
      },
    ],
    bookingRequests: [
      {
        reference_number: Number,
        coupon_code: Number,
        show_id: Number,
        tickets: [{ type: Number }],
      },
    ],
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

const User = mongoose.model("User", userSchema);
module.exports = User;
