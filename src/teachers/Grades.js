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
const handleChange =  (e)=>{setScourse(teacher.courses[e.target.value])
                            console.log(teacher.courses[e.target.value])}




    


    return (
        <div className = "App">
           {teacher && <div>
               <h2> Wellcome   {teacher.fname} {teacher.lname} </h2>
           {(teacher.courses.length===0)&&<h2>there is no course assigned to you yet</h2>}
           {(teacher.courses.length!==0)&&<div><label>select a course</label>
            <select
           valuee ={null}
           onChange={ handleChange  }
           >
               <option value={null}> </option>

               {teacher.courses.map((course,index)=> (
                  
                <option value={index} key={course._id} >Level :{course.level} group:{course.group} Name:{course.name}</option>
                
               ))}
           </select></div>}</div>}

           
           {scourse && <Gradesform course = {scourse}/>}
        </div>
    )
}

export default Grades
