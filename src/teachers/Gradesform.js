import React from 'react'
import {useState,useEffect} from "react"
import Graderowcourse from './Graderowcourse'

const Gradesform = ({course}) => {
    const [grades,setGrades] = useState(null)
  
    useEffect(()=>{fetch('http://localhost:5000/grades' , {
        method:'put',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({course})
     }).then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        console.log("response is here-----------------------")
        console.log(data)
        setGrades(data)
    })},[course])

    const handleSave = ()=>{fetch('http://localhost:5000/grades/save/' , {
        method: 'put',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({grades,course})
     })
        
    }

    return (
        <div>
           <h2>level: {course.level} group:{course.group} course: {course.name}</h2>
        

           {grades && <div>
            {grades.map((grade,index)=>(<Graderowcourse grades={grades} setGrades={setGrades} index={index} course={course}  />))
            
            }
             </div>}

             <button onClick={()=>{handleSave()}}>SAVE</button>




        </div> 
    )
}

export default Gradesform
