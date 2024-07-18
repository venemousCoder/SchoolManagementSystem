const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "name must be provided"],

    },
    email: {
        type: String,
        required: [true, "name must be provided"],
        unique: [true, "email already registered"]

    },

    active: {
        type: Boolean,
        required: true


    },
    currentClass: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    stats: {
        daysPresnt: Number,
        daysabsent: Number,
        punctualityRate: Number,
        puntualityRemark: { type: String, enum: ["poor","average","good","excellent"] }
    }
    ,
    faction: {
        type: String,
        required: false
    },
    results: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Results'
    },
    active: {
        type: Boolean,
        required: true
    }

}, {
    timestamps: true,
});

mongoose.plugin(passportMongoose)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student