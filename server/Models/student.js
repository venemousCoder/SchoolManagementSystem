const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const studentSchema = new mongoose.Schema({
    username: {
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
        required: true,
       default:true

    },
    currentClass: {
        type: String,
        required: true,
       
    },
    category: {
        type: String,
        required: true,
        default:"student"
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
        required: true
    },
    results: {
        type:[mongoose.Schema.Types.ObjectId],
        ref: 'Results',
        default:[]
    },
    
}, {
    timestamps: true,
});

studentSchema.plugin(passportMongoose)

const Student = mongoose.model('Student', studentSchema)

module.exports = Student