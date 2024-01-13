const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuid = require("uuid");

const UserSchema = new Schema({
  _id: {
    type: String,
    default: uuid.v4,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
