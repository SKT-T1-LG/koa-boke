const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({
    "cid":Number,
    "name":String,
    "students" :[Number]
})


CourseSchema.statics.findCourseById = function (cid, cb) {
    this.find({cid}, (err, results) => {
        cb(results)
    })
}

CourseSchema.methods.del = function (cid, cb) {
    this.find({cid}, (err, results) => {
        cb(results)
    })
}

const Course = mongoose.model("Course", CourseSchema)

module.exports = Course