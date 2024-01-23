const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
    programName: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    modules: {
        type: [String],
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    registrationFee: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const CourseModal = mongoose.model('course', programSchema);

module.exports = { CourseModal };
