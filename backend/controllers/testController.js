const { MongoClient } = require("mongodb");
const userModel = require("../models/user-model");


const printModel = async (req, res) => {
    let payload = new userModel({
        email: req.body.email + 'my insert!???',
        password: req.body.password,
      });

      let storeInMongo = await userModel.create({
        email: '123@123.com',
        password: 'hello123'
      });
      
    console.log('MODEL CREATED', storeInMongo);
    console.log('PRINT MODEL', payload);

    return res.status(201).json(`User ${storeInMongo.email} created`);
}

module.exports = printModel;