const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: false, default: "" },
  isAdmin: { type: Boolean, default: false },
}
);

module.export = mongoose.model("User", UserSchema)
