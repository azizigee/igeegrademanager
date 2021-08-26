const express = require('express')
const router = express.Router()
const Student = require ('.././models/studentModel')

router.get('/',(req, res,)=>{   //get the list of students-----------------------
    Student.find({},function(err,data){
        res.json(data)
    })

    console.log("the reqest is /students");
})

router.get('/:id',(req, res,)=>{   //get only one students-----------------------
    const one =Student.find({_id:req.params.id},function(err,data){
        console.log(data[0])
        res.json(data[0])
    })

    console.log("the reqest is /students/id");
})

router.post('/',(req, res,)=>{  //add new student----------------------------
    console.log(req.body)
  const student = new Student( req.body)
  student.save()
  res.status(200).end()

    })

    router.delete('/:id',(req, res,)=>{  //delete student----------------------------
        Student.findByIdAndRemove(req.params.id,{useFindAndModify: false}, ()=>{} )
        console.log(`the of the object is ${req.params.id}`)
        
      res.status(200).end()
    
        })

        router.put('/:id',(req, res,)=>{  //update student----------------------------
          console.log(req.params.id)
     
           Student.findByIdAndUpdate(req.params.id, req.body,{useFindAndModify: false}, ()=>{})

        
      res.status(200).end()
    
        })
        module.exports = router