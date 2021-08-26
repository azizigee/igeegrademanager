const express = require('express')
const router = express.Router()
const Teacher = require ('.././models/teacherModel')

router.get('/',(req, res,)=>{   //get the list of teachers-----------------------
    Teacher.find({},function(err,data){
        res.json(data)
    })

   // console.log("the reqest is /students");
})

router.post('/',(req, res,)=>{  //add new teacher----------------------------
    //console.log(req.body)
  const teacher = new Teacher( req.body)
  teacher.save()
  res.status(200).end()

    })

    router.delete('/:id',(req, res,)=>{  //delete teacher----------------------------
        Teacher.findByIdAndRemove(req.params.id,{useFindAndModify: false}, ()=>{res.status(200).end()} )
       // console.log(`the of the object is ${req.params.id}`)
        
      
    
        })

        router.get('/:id',(req, res,)=>{   //get only one students-----------------------
          Teacher.find({_id:req.params.id},function(err,data){
            //  console.log(data[0])
              res.json(data[0])
          })
      
          //console.log("the reqest is /students/id");
      })



        router.put('/:id',(req, res,)=>{  //update Teacher----------------------------
         // console.log(req.body)
        Teacher.findByIdAndUpdate(req.params.id, req.body,{useFindAndModify: false}, ()=>{})

        
      res.status(200).end()
    
        })

        router.post('/addcourse/:id',(req, res,)=>{  //addcourse-----------update Teacher----------------------------
          console.log(req.params.id)
          Teacher.findOne({_id:req.params.id}, function (err,data){

          data.courses.push(req.body)
          data.save()

          })
        //Teacher.findByIdAndUpdate(req.params.id, req.body,{useFindAndModify: false}, ()=>{})

        
      res.status(200).end()
    
        })

        router.put('/deletecourse/:id',  (req, res,)=>{  //update Teacher----------------------------deletecourse
         console.log(req.params.id)

          console.log(req.body)
         
          Teacher.findOne(req.body,  async function (err,data ){
          data.courses.id(req.params.id).remove()
          //ata.courses.push(req.body)
           data.save().then(res.status(200).end())

           //res.status(200).end()

          }).then

    
        })



        module.exports = router