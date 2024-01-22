const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Fullname is required'],
  },
  dateofbirth: {
    type: Date,
    required: [true, 'Date Of Birth is required'],
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
  },
  occupation: {
    type: String,
    required: [true, 'Occupation is required'],
  },

  // Additional fields based on occupation
  institution_name: {
    type: String,
  },
  designation: {
    type: String,
  },
  companyName: {
    type: String,
  },
  educationalQualifications: {
    type: String,
  },

  branch: {
    type: String,
    required: [true, 'Branch is required'],
  },
  // File fields
  passportphoto: {
    type: Object,
    required: [true, 'Passport size Photo is required'],
  },
  cv: {
    type: Object,
    required: [true, 'CV is required'],
  },
  
  // Other fields
  reasontojoin: {
    type: String,
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  state: {
    type: String,
    required: [true, 'State is required'],
  },
  country: {
    type: String,
    required: [true, 'Country is required'],
  },
  pincode: {
    type: String,
    required: [true, 'Pincode is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  altEmail: {
    type: String,
    required: [true, 'Alternative Email is required'],
  },
  mobileNumber: {
    type: String,
    required: [true, 'Mobile number is required'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  address: {
    type: String,
    required: [true, 'Address is required'],
  },
  leadFrom: {
    type: String,
  },
  declaration: {
    type: Boolean,
    required: [true, 'Please check this field.'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
    required: [true, 'Created date is required.']
  },
});

const AdmissionModal = mongoose.model('admission', admissionSchema);

module.exports = AdmissionModal;
