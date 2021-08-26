import { useHistory,  } from "react-router"
import {  useEffect } from "react"
import { Link } from "react-router-dom"

const StudentsList = ({students , setRender,render}) => {
    //const {id}= useParams()
    const history = useHistory()
    

    const handeledelet = (e)=>{
          setRender(!render)
        fetch('http://localhost:5000/students/' + e.target.value, {
           method:'DELETE',
        }).then(()=>{history.push('/admin/students')
       })}
useEffect(()=>{},[])

    return (
        <div className="student-list">
          
            {students.map(student => (
               <div className="studentPreview" key= {student._id}>
                   <h2>{student.fname} {student.lname} | {student.rnumber}</h2>
                   <p> level:{student.level}, Section:{student.section} Group:{student.group}</p>
                   <button onClick={handeledelet  } value={student._id}>DELET</button>
                   <Link to={`/admin/students/editst/${student._id}`}>
                   <button  >EDIT</button>
                   </Link>

               </div>

            ))}
            
        </div>
    )}
export default StudentsList
