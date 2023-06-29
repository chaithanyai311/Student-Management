const mongoose = require('mongoose');

const StudentListSchema = new mongoose.Schema({
    rollno: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    studentClass: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    studentid: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    contact: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

const StudentList = mongoose.model('StudentList', StudentListSchema);

module.exports = { StudentList };
