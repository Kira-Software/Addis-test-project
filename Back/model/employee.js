const mongoose = require("mongoose")

const Schema = mongoose.Schema

const employeeSchema = new Schema ({
    employeeName: {
        type: String,
        // required: true
    },
    dateofBirth: {
        type: Date,
        // required: true
        default: Date.now()
    },
    gender: {
        type: String,
        // required: true
    },
    salary: {
        type: Number,
        // required: true
    }
})

module.exports = Employee = mongoose.model('employee',employeeSchema)