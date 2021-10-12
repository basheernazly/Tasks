const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const router = require("./router/userRouter");
const notFound = require("./middleware/not-found");
require("dotenv").config();

app.use(express.json());
app.use("/api/users", router);
app.use(notFound);
port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(port, console.log(`server hit on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
