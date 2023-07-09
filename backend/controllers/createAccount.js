const { MongoClient } = require("mongodb");
const userModel = require("../models/user-model");

const createAccount = async (req, res) => {
    console.log("REQUEST BODY", req.body);
    let storeInMongo = await userModel.create({
        email: req.body.email,
        password: req.body.password,
        role: 'User'
    });
    return res.status(201).json(`Account created with ${req.body.email}`);
};

module.exports = createAccount;