import { useHistory,  } from "react-router"
import {  useEffect, useState } from "react"
import { Link } from "react-router-dom"

const TeachersList = () => {
    //const {id}= useParams()
    const history = useHistory()

    const [teachers, setTeachers]=useState(null)    

    useEffect(()=>{fetch('http://localhost:5000/teachers')
    .then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        //console.log(data)
        setTeachers(data)
    })
},[])

    return (
        <div>
        {!teachers && <h2>failed to get teachers</h2>}
        {teachers && <div className="student-list">
          
            {teachers.map((teacher) => (
               <div className="studentPreview" key= {teacher._id}>
                   <h2>{teacher.fname} {teacher.lname} | </h2>
                   
                 
                   <Link to={`/teachers/grades/${teacher._id}`}>
                   <button  >ENTER</button>
                   </Link>


               </div>

            ))}
            
        </div> } </div>
    )}
export default TeachersList
