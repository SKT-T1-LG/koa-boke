const Course = require('./Course')
const Student = require('./Student')

exports.xuanke = function(sid,cid){
    Course.findCourseById(cid, function(res){
        let course = res[0]
        course.students.push(sid)
    })
}