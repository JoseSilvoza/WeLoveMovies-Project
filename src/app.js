if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// Import Routes
const moviesRouter = require("./movies/moviesRouter");
const reviewsRouter = require("./reviews/reviewsRouter");
const theatersRouter = require("./theaters/theatersRouter");

// Import Errors
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());
app.use(cors());

// Routes 
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

// Errors
app.use(notFound);
app.use(errorHandler);

module.exports = app;
