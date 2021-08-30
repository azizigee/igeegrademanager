const express = require('express')
const router = express.Router()
const Student = require ('.././models/studentModel')



        router.put('/',(req, res,)=>{  //get grades of student----------------------------
          const filter=function(course){ 
            if(course.section==='' && course.group==='') return {level:course.level}
            else if(course.section==='' && course.group!=='') return {level:course.level,group:course.group}
            else if(course.section!=='' && course.group==='') return {level:course.level,section:course.section}
            else return {level:course.level,section:course.section,group:course.group}}
     
          Student.find(filter(req.body.course),`fname lname rnumber grades${req.body.course.level}.${req.body.course.name}`,function(err,data){
           console.log(req.body)
           console.log("------------")
           console.log(data)
            
            res.status(200).json(data).end()
            
           // console.log(data)
        })
        })

        router.put('/save/',(req, res,)=>{
          const grades = req.body.grades
          const course= req.body.course
          console.log("the returned data to the server")
          console.log(grades)
          grades.map((grade)=>{
            Student.findById(grade._id, function (err, doc) {
              
              doc[`grades${course.level}`][`${course.name}`] = grade[`grades${course.level}`][`${course.name}`] ;
              doc.save();
            })
          })
          res.status(200).end()
          
        })



        module.exports = router