import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import Gradesform from "./Gradesform"

const Grades = () => {
    const {id}= useParams()
    const [teacher, setTeacher] = useState(null)
    const [scourse, setScourse] = useState(null)

    //--------------------------------------------------

    useEffect(()=>{fetch('http://localhost:5000/teachers/'+id)
    .then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        console.log(data)
        setTeacher(data)
    })
},[])
//-----------------------------------------------------------
// the the scourse is put the null for while (using setTimeout) to restart the graderowcourse or graderowlab 
const handleChange =  (e)=>{setScourse(null)
       setTimeout(()=>{setScourse(teacher.courses[e.target.value])
        console.log(teacher.courses[e.target.value])},1)
                            }




    


    return (
        <div className = "Appp">
           {teacher && <div>
               <h1>   {teacher.fname} {teacher.lname} </h1>
           {(teacher.courses.length===0)&&<h2>there is no course assigned to you yet</h2>}
           {(teacher.courses.length!==0)&&<div><label>select a course</label>
            <select
           valuee ={scourse}
           onChange={ handleChange  }
           >
               <option value={null}> </option>

               {teacher.courses.map((course,index)=> (
                  
                <option value={index} key={course._id} >Level :{course.level} section:{course.section} group:{course.group} Name:{course.coursename}/{course.coursecode}</option>
                
               ))}
           </select></div>}</div>}

           
           {scourse && <Gradesform course = {scourse}/>}
        </div>
    )
}

export default Grades
