const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const mongodbURI = process.env.MONGODB_URI;
const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            console.log("Already connected to MongoDB. Did not attempt to reconnect.");
            return;
        }

        mongoose.connect(mongodbURI);
        mongoose.connection.once("open", () => {
            console.log("Connected to MongoDB");
        });
    } catch (e) {
        console.log("Error connecting to MongoDB", e);
    }
};

export default connectDB;
