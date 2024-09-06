const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes"); // Ensure the path is correct

const { PORT = 3001 } = process.env;
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/wtwr_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use("/", routes);

// Centralized error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);

  if (err.name === "invalidIdError") {
    res.status(400).send({ message: "Invalid ID format" });
  } else if (err.name === "NotFoundError") {
    res.status(404).send({ message: err.message });
  } else {
    res.status(500).send({ message: "An internal server error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
