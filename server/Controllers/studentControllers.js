const passport = require('passport');
const Student = require('../Models/student');
function createStudent(req, res) {
    let newStudent = {
        username: req.body.username,
        email: req.body.email,
        currentClass: req.body.currentClass,
        faction: req.body.faction,
    }
    const student = new Student(newStudent);

    Student.register(student, req.body.password, (error, user) => {
        if (!user) {
            return res.status(500).json({
                status: "fail",
                message: " student not created  :try again",
                error: error
            })
        }
        return res.status(201).json({
            status: "success",
            message: " student created  huuuuu!",
            error: error
        })
    })
}
module.exports = { createStudent }
