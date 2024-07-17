const mongoose = require('mongoose');


const AdminSchema = mongoose.Schema(
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

const admin = mongoose.model('Admin', AdminSchema);
module.exports = admin;
