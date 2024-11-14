const express = require("express");
const connectToDb = require("./config/connecttodb"); // Corrected the import statement
const cors = require("cors"); // Import the cors middleware

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors()); // Use cors middleware to enable CORS


const PORT = process.env.PORT || 8001;

// You need to use template literals (backticks) for string interpolation
app.listen(PORT, () =>
  console.log(`Server is running ${process.env.NODE_ENV} mode on port ${PORT}`)
);

connectToDb(); // Corrected the function name


app.use("/api/annonces", require("./routes/annonceRoute"));
app.use("/api/partners", require("./routes/partenaireRoute"));

// config/connecttodb.js
const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Connection failed", error);
  }
};

