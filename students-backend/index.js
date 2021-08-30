const express = require ('express');
//const Student = require ('./models/studentModel')
const cors = require("cors")
const mongoose = require("mongoose")

const app =express();

mongoose.connect('mongodb://localhost:27017/school', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("mongoDB is connected")
});//--------------------------------------------------------------------------------------
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: "http://localhost:3000",
            
}))

const logger = (req,res, next)=>{
    console.log("--------------------------")
    console.log(req.method)
    //console.log(req.body)
    next();
}

app.use(logger);

app.use('/students',require('./routes/students'))
app.use('/teachers',require('./routes/teachers'))
app.use('/grades',require('./routes/grades'))
    
const PORT = process.env.port || 5000;

app.listen(PORT, ()=> console.log(`server listening on port ${5000}`));