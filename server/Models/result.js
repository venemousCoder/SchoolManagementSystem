const mongoose = require('mongoose');

const ResultSchema = new mongoose.Schema({
    term: {
        type: String,
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    courses: [{
        name: {
            type: String,
            required: true
        },
        score: [{ testScore: { type: Number }, examScore: { type: Number } }]
    }]
}, {
    timestamps: true,
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;