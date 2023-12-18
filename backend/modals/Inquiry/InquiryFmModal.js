const mongoose = require("mongoose");

const InquiryFmSch = mongoose.Schema({
  fullname: {
    type: String,
    required: ["fullname is required.", true],
  },
  email: {
    type: String,
    required: ["Email is required.", true],
  },
  phone: {
    type: String,
    required: ["Phone No. is required.", true],
  },
  course: {
    type: String,
    required: ["Course is required.", true],
  },
  createdAt: {
    type: String,
  },
});

const InquiryModal = mongoose.model("inquiry", InquiryFmSch);

module.exports = { InquiryModal };
