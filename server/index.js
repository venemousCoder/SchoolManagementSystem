let express = require("express");
let cors = require("cors");
const mongoose = require("mongoose");
let app = express();
require("dotenv").config();
let Staff = require("./Models/staff");
let Parent = require("./Models/parent");
let Student = require("./Models/student");
const passport = require('passport');
let PORT = process.env.PORT || 4000;
const session = require('express-session');
const router = require("./Routes/index");

//app configuration


mongoose.connect(process.env.DB || "mongodb://localhost:27017/sms")
    .then(() => {
        console.log("Connected to DB");
    }).catch((err) => {
        throw new Error(err);
    });

app.use(session({
    name: "token",
    cookie: { name: "mustfa", maxAge: 60000, secured: true },
    secret: "jernhtjrtkhfg",
    saveUninitialized: true,
    resave: false
}))

app.use(passport.initialize());
app.use(passport.session());


passport.use('staff', Staff.createStrategy())
passport.use('parent', Parent.createStrategy())
passport.use('student', Student.createStrategy())

passport.serializeUser(Staff.serializeUser())
passport.serializeUser(Student.serializeUser())
passport.serializeUser(Parent.serializeUser())

passport.deserializeUser(Staff.deserializeUser())
passport.deserializeUser(Student.deserializeUser())
passport.deserializeUser(Parent.deserializeUser())

app.get("/", (req, res) => {
    console.log(req.session.id)
    res.send("fjdjgsvbgtbj  cffhzwfgu")
    // req.session.isSigned=true
})
app.get("/ado", (req, res) => {
    console.log(req.session.id, req.session.isSigned)
    res.send("fjdjgsvbgtbj  cffhzwfgu version 2")

})
app.get("/dal", (req, res) => {
    console.log(req.session.id)
    res.send("fjdjgsvbgtbj  cffhzwfgu version 3")

})



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["*"]
}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`app running at PORT: ${PORT}`);
})
