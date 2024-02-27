const express = require("express");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const auth = require("./routes/auth");

const app = express();
dotenv.config();
app.use(express.json());
app.use(auth);
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connect to mongoDb");
    app.listen(PORT, () => {
      console.log("server is running on 5000");
    });
  })
  .catch((err) => {
    console.error("error connecting to mongoDb:", err.message);
  });