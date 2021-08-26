const mongoose= require("mongoose")

const coursesSchema = new mongoose.Schema({

    level: {},
    section: {},
    group: {},
    name:{},

})

const teacherSchema = new mongoose.Schema({

    fname: {},
    lname: {},
    password:{},
    courses: [coursesSchema]
})

const teacher = mongoose.model('teacher', teacherSchema)

module.exports= teacher
