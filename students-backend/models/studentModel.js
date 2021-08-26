const mongoose= require("mongoose")

// other subSchemas will be here

const studentSchema = new mongoose.Schema({

    fname: {},
    lname: {},
    rnumber:{},
    level: {},
    section:{},
    group: {},
    level1: {ee500c:{type: Number,default:0},ee500e:{type: Number,default:0},ee500a:{type: Number, default:0}}
})


const student = mongoose.model('student', studentSchema)
module.exports= student


