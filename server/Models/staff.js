const mongoose = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const StaffSchema = mongoose.Schema(
  {
    name: { type: String, required: [true, "name is required"], },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true
    },
    category: {
      type: String,
      required: [true, " please specify the category"],
    },
    role: {
      type: String,
      enum: ["admin", "superAdmin", "teacher", "formMaster"]
    },
    classAdministered: {
      type: {}
    },
    classTeaching: [{
      class: { type: String },
      course: [{ type: String }]
    }],
    active: {
      type: Boolean
    },


  },
  {
    timestamps: true,
  }
);

mongoose.plugin(passportMongoose);

const Staff = mongoose.model('Admin', StaffSchema);
module.exports = Staff;
