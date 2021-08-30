import { useHistory,  } from "react-router"
import {  useEffect ,useState} from "react"
import { Link } from "react-router-dom"


const TeachersList = ({courses ,id, setRender,render}) => {
    //const {id}= useParams()
    const history = useHistory()
    
    
    const handeledelet = (e)=>{
        //setRender(!render)
        fetch('http://localhost:5000/teachers/deletecourse/' + e.target.value, {
           method:'put',
           headers:{"Content-Type":"application/json"},
           body: JSON.stringify({_id:id})
        }).then((res)=>{
            if(res.status===200) setRender(!render)
       })}
useEffect(()=>{},[render])

    return (
      <div className="student-list"> 
          
           <div >
          
            {courses.map(course => (
               <div className="studentPreview" key= {course._id}>
                   <h2>level:{course.level} section:{course.section} group:{course.group} |{course.name} </h2>
                   
                   <button onClick={handeledelet  } value={course._id}>DELET</button>
               </div>

            ))}
            
            </div>
    </div>
    )}
export default TeachersList
