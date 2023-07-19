//? NEXTJS
import { NextResponse } from 'next/server';
import nc from 'next-connect';
import connectDB from '@/lib/mongo/mongo';

//? BCRYPT
const bcrypt = require("bcryptjs");

//? MONGODB
const { MongoClient } = require("mongodb");
const userModel = require("@/models/user-model");

//? JWT
const jwt = require("jsonwebtoken");

//* Using a GET request to connect to MongoDB as other ways were not working
export async function GET() {
    console.log("\x1b[32m___GET request received___\x1b[30m")
    try{
        console.log("Connecting to MongoDB...");
        connectDB();
        return NextResponse.json({
            message: "Successful connection to MongoDB",
          });
    }
    catch(e){
        return NextResponse.json({
            message: `Problem connecting to to MongoDB ${e}`,
          });
    }
}

export async function POST(req) {
    const request = await req.json();

    // //* Check if email already exists
    // //* if so break out of account creation
    try{
        let emailExists = await userModel.findOne({ email: request.email });
        if (emailExists) {
            return NextResponse.json({
            "message": 'An account is already associated with this email address.'
            }, { status: 409 });
          }
    }
    catch(e){
        console.log("ERROR CHECKING EMAIL EXISTS", e)
        return NextResponse.json({
            "message": 'Signing up failed. Please try again later.'
           }, { status: 500 });
    }

    //* hash password
    let hashedPassword;
    try{
        hashedPassword = await bcrypt.hash(request.password, 12);
    }
    catch(e){
        console.log('Error hashing password with bcrypt', e);
    }

    //* Store info in Mongo
    try{
        let storeInMongo = await userModel.create({
            email: request.email,
            password: hashedPassword,
            role: 'User'
        });
    }
    catch(e){
        console.log("Error saving to MongoDB", e);
    }
    
    //* Create and sign JWT
    let token;
    try{
        let JWTpayload = new userModel({
            email: req.body.email,
            password: req.body.password,
            id: req.body._id,
        });
        const key = 'secret-key';
        token = jwt.sign({ userId: JWTpayload.id, email: JWTpayload.email }, key, {
            expiresIn: "1h",
          });
    }
    catch(e){
        console.log('Error creating JWT', e);
    }

   return NextResponse.json({
    "jwt": token
   }, {status: 201})
}