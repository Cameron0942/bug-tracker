require('dotenv').config();

const express = require('express');
const app = express();
const cors = require("cors");
const path = require('path');
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

//? PORTS
const mongodbPort = 7000;
const appPort = 5000;

//? ROUTERS
const postRouter = require('./routes/postRouter');

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, 'build')));

const mongodbURI = process.env.MONGODB_URI;
mongoose.connect(mongodbURI);

mongoose.connection.once("open", () => {
    console.log(`Connected to MongoDB on port: ${mongodbPort}`);
  });

//* ROUTES
app.use("/", postRouter);

app.listen(appPort, () => console.log(`Server is running on port ${appPort}`));