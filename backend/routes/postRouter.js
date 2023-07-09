const express = require("express");
const postRouter = express.Router();

//? CONTROLLERS
const createAccount = require('../controllers/createAccount');
const testController = require('../controllers/testController');

postRouter.use(express.json());

postRouter.post("/", createAccount);

module.exports = postRouter;