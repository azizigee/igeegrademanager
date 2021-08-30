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
        EE100:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE101:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE102:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}}
    },
    grades2: {
        EE200:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE201:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE202:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}}
    },
    grades3: {
        EE300:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE301:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}},
        EE302:{control:{type:Number, default:0},exam:{type:Number, default:0},makeup:{type:Number, default:0}}
    }
})


const student = mongoose.model('student', studentSchema)
module.exports= student