const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    score: {
        test: {
            type: Number
        },
        exam: {
            type: Number
        }
    },
    grade: {
        type: String
    },
    remark: {
        type: String
    }
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema)

module.exports = Course