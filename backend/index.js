import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import { User } from "./db/models/users.js";
// import db from "./db/conn.js"
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();
const port = 5000;
mongoose
    .connect(
        "mongodb+srv://krishnakalyanax:xtrmk123@cluster0.ng4bvaj.mongodb.net/googledb?retryWrites=true&w=majority"
    )
    .then((result) => {
        console.log("Connected to database!");
        app.listen(port);
    })
    .catch((err) => console.log("err", err));
app.post("/login", async (req, res) => {
    const userData = await User.findOne({ email: req.body.email });
    if (!userData) {
        let insertdata = await User.create({
            name: "Krishna Kalyana",
            email: "krishnakalyanax@gmail.com",
        });
        insertdata.save();
        res.send("Hello World!");
    }
    else {
        let data = {
            time: Date(),
            fullName: userData.name,
            email: userData.email
        }
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY)
        res.cookie('token', token)
        setTimeout(() => {
            res.send({ isSuccess: true, message: "success", data: userData });
        }, 8000)
    }
});
app.get("/getcordinates/:country", async (req, res) => {
    console.log(req.headers.cookie);
    if (req?.params?.country === "paris") {
        setTimeout(() => {
            res.status(200)
            res.send({ isSuccess: true, message: "success", data: [2.3522, 48.8566] })
        }, 10000)
    } else {
        res.send({ isSuccess: true, message: "success", data: [2.3522, 48.8566] })
    }
})


