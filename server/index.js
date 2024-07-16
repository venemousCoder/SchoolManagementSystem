let express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
let app = express();
require("dotenv").config();
let PORT = process.env.PORT || 4000;
const session = require('express-session');

//app configuration


mongoose.connect(process.env.DB || "mongodb://localhost:27017/sms")
 .then(() => {
    console.log("Connected to DB");
 }).catch((err) => {
    throw new Error(err);
 });

app.use(session({
    cookie: { maxAge: 60000},
    secret: process.env.SECRET_KEY,
    saveUninitialized: false,
    resave: false
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ["*"]
}))

app.listen(PORT, () => {
    console.log(`app running at PORT: ${PORT}`);
})
