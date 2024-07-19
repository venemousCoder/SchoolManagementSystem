const { createStudent } = require('../Controllers/studentControllers');
const router = require('express').Router()


router.post('/createStudent',createStudent);


module.exports = router