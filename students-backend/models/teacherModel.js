const mongoose= require("mongoose")

const coursesSchema = new mongoose.Schema({

    level: {},
    section: {},
    group: {},
    coursename:{},
    coursecode:{},


})

const teacherSchema = new mongoose.Schema({

    fname: {},
    lname: {},
    email:{},
    password:{},
    courses: [coursesSchema]
})

const teacher = mongoose.model('teacher', teacherSchema)

module.exports= teacher
