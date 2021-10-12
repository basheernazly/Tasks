const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "you should add name"] },
  email: { type: String, required: [true, "you should add email"] },
  age: { type: Number, required: [true, "you should add age"] },
  phone: { type: String },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("users", userSchema);
