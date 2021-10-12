const user = require("../model/userModel");

const addUser = async (req, res) => {
  try {
    const newuser = await user.create(req.body);
    res.status(200).json({ newuser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await user.find({});
    console.log(users.length);
    if (users.length == 0) {
      return res.status(404).json({ msg: "there no users." });
    }
    res.status(200).json({ users });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { addUser, getUsers };
