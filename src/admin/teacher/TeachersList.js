import { useHistory,  } from "react-router"
import {  useEffect } from "react"
import { Link } from "react-router-dom"

const TeachersList = ({teachers , setRender,render}) => {
    //const {id}= useParams()
    const history = useHistory()
    

    const handeledelet = (e)=>{
         
        fetch('http://localhost:5000/teachers/' + e.target.value, {
           method:'DELETE',
        }).then((res)=>{if(res.status===200){
            setRender(!render)
            history.push('/admin/teachers')
    }})}
useEffect(()=>{},[])

    return (
        <div className="student-list">
          
            {teachers.map(teacher => (
               <div className="studentPreview" key= {teacher._id}>
                   <h2>{teacher.fname} {teacher.lname} | </h2>
                   
                   <button onClick={handeledelet  } value={teacher._id}>DELET</button>
                   <Link to={`/admin/teachers/editteach/${teacher._id}`}>
                   <button  >EDIT</button>
                   </Link>


               </div>

            ))}
            
        </div>
    )}
export default TeachersList
