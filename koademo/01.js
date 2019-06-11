const mongoose = require('mongoose')
const Course = require('./models/Course')
const Student = require('./models/Student')
const tool = require('./models/tool')

mongoose.connect('mongodb://localhost/xuanke',{useNewUrlParser:true}, function(err){

    if(err){

        console.log('Connection Error:' + err)

    }else{

        console.log('Connection success!') }

})

