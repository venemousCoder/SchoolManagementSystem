const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const parentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name must be provided"],
    },
    email:{
        type:String,
        required:[true,"name must be provided"],
        unique:[true,"email already registered"]

    },
    children: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    category: {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

mongoose.plugin(passportMongoose)

const Parent = mongoose.model('Parent', parentSchema);

module.exports = Parent