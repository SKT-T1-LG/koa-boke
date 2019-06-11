const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    "sid":Number,
    "name":String,
    "course": [Number]
})

StudentSchema.statics.findCourseById = function (sid, cb) {
    this.find({sid}, (err, results) => {
        cb(results)
    })
}

const Student = mongoose.model("Student", StudentSchema)

module.exports = Student