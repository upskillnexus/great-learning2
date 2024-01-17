const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const SmtpSchema = mongoose.Schema({
  for: {
    type: String,
    required: true,
  },
  emailFrom: {
    type: String,
  },
  yourName: {
    type: String,
    require: true,
  },
  server: {
    type: String,
    require: true,
  },
  port: {
    type: Number,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  orgNumber: {
    type:String,
    required: true,
  },
  to: {
    type: String,
    required: true, 
  }
},{versionKey:false,timestamps: true,});


const smtpModal = mongoose.model("Smtp", SmtpSchema)
module.exports = {smtpModal};