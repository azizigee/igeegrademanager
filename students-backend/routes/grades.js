const express = require('express')
const router = express.Router()
const Student = require ('.././models/studentModel')



        router.put('/',(req, res,)=>{  //get grades of student----------------------------
          //the ffilter function is used to eliminate the empty strig from th filter put is Student.find()
          const filter=function(course){ 
            if(course.section==='' && course.group==='') return {level:course.level}
            else if(course.section==='' && course.group!=='') return {level:course.level, group:course.group}
            else if(course.section!=='' && course.group==='') return {level:course.level, section:course.section}
            else return {level:course.level, section:course.section,group:course.group}}
     
          Student.find(filter(req.body.course),`fname lname rnumber grades${req.body.course.level}.${req.body.course.coursecode}`,function(err,data){
           console.log(req.body)
           console.log("------------")
           console.log(data)
            
            res.status(200).json(data).end()
            
           // console.log(data)
        })
        })

        router.put('/save/',(req, res,)=>{ // put the grades of the students to its corresponding students
          const grades = req.body.grades
          const course= req.body.course
          console.log("the returned data to the server")
          console.log(grades)
          grades.map((grade)=>{
            Student.findById(grade._id, function (err, doc) {
              
              doc[`grades${course.level}`][`${course.coursecode}`] = grade[`grades${course.level}`][`${course.coursecode}`] ;
              doc.save();
            })
          })
          res.status(200).end()
          
        })

        router.put('/deliberation/',(req, res,)=>{ // put the grades of the students to its corresponding students
          console.log("this is deliberation")
          console.log(req.body)

          const filter=function(req){ 
            if(req.body.group==='' ) return {level:req.body.level}
            else return {level:req.body.level, group:req.body.group}}

          Student.find( filter(req) ,`fname lname rnumber group grades${req.body.level}`,function(err,data){
            
            console.log("------------")
            console.log(data)
             
             res.status(200).json(data).end()
             
            // console.log(data)
         })
            
        })



        module.exports = router