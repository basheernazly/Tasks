const express = require("express");
const router = express.Router();
const user = require("../controller/userController");
router.route("/").get(user.getUsers).post(user.addUser);
module.exports = router;
