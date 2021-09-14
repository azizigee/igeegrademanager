import React from 'react'
import {useState,useEffect} from "react"
import Graderowcourse from './Graderowcourse'
import Graderowlab from './Graderowlab'

const Gradesform = ({course}) => {
    const [grades,setGrades] = useState(null)
  
    useEffect(()=>{
        fetch('http://localhost:5000/grades' , {
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
        
           {(grades&& (course.coursecode.length!==6) ) && <div>
               
               <output style={{marginLeft: "440px", fontWeight: "bold"}} >Control</output>
               <output style={{marginLeft: "55px", fontWeight: "bold"}}>Exam</output>
               <output style={{marginLeft: "70px", fontWeight: "bold"}}>MakeUp</output>
            {grades.map((grade,index)=>(<Graderowcourse key={index} grades={grades} setGrades={setGrades} index={index} course={course}  />))
            
            }
             </div>}

             {(grades&& (course.coursecode.length===6) ) && <div>
             <output style={{marginLeft: "440px", fontWeight: "bold"}} >Grade</output>
            {grades.map((grade,index)=>(<Graderowlab key={index} grades={grades} setGrades={setGrades} index={index} course={course}  />))
            
            }
             </div>}

             <button onClick={()=>{handleSave()}}>SAVE</button>




        </div> 
    )
}

export default Gradesform
