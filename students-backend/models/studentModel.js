const mongoose= require("mongoose")

// other subSchemas will be here

const studentSchema = new mongoose.Schema({

    fname: {},
    lname: {},
    rnumber:{},
    level: {},
    section:{},
    group: {},
    grades1: {
        EE171:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE173:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE175:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE175L:{grade:{type:Number, default:0}},
        EL103:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE121:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE172:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE174:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE176:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE178:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE122:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE178L:{grade:{type:Number, default:0}},
        EE102:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EL104:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}}
    },
    grades2: {
        EE271:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE273:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE241:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE221:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE203:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE241L:{grade:{type:Number, default:0}},
        EE203L:{grade:{type:Number, default:0}},
        EE178L:{grade:{type:Number, default:0}},
        EE281:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE262:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE252:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE242:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE222:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE232:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE242L:{grade:{type:Number, default:0}},
        EE222L:{grade:{type:Number, default:0}},
        EE232L:{grade:{type:Number, default:0}}


    },
    grades3: {
        EE321:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE311:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE323:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE331:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE351:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE353:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE311L:{grade:{type:Number, default:0}},
        EE331L:{grade:{type:Number, default:0}},
        EE323L:{grade:{type:Number, default:0}},
        EE312:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE332:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE352:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE312L:{grade:{type:Number, default:0}},
        EE352L:{grade:{type:Number, default:0}},
        EE392:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE382:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}}
    }
})


const student = mongoose.model('student', studentSchema)
module.exports= student