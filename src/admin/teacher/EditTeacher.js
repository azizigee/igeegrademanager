import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import Addcourse from "./Addcourse"
import Courseslist from "./Courseslist"
const EditTeacher = () => {

   const{id}= useParams()
   //const [student, setStudent]=useState(null)
const [render,setRender] =useState(false)
   const [fname,setFname] = useState('')
   const [lname,setLname] = useState('')
   const [password,setPassword] = useState('')
   const [courses,setCourses] = useState([])


    const hystory= useHistory()


    useEffect(()=>{fetch('http://localhost:5000/teachers/'+ id)
    .then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
       // console.log(data)
        setFname(data.fname)
        setLname(data.lname)
        setPassword(data.password)
        setCourses(data.courses)
        console.log(courses)       

    })
},[render])




    const handeleSubmit = (e)=>{
    e.preventDefault()
    const teacher={fname,lname,password};
    
    fetch('http://localhost:5000/teachers/'+ id, {
       method:'put',
       headers:{"Content-Type":"application/json"},
       body: JSON.stringify(teacher)
    }).then(()=>{hystory.push('/admin/teachers')
   })}

    return (
        <div className="createStudent" >
{/*             <h3>Editing Teacher details</h3>
            <form onSubmit = {handeleSubmit} >
                
                <label >First name</label>
                <input type="text" required 
                   value= {fname}
                   onChange={(e)=>setFname(e.target.value)}
                />

                <label >Last name</label>
                <input type="text" required 
                   value= {lname}
                   onChange={(e)=>setLname(e.target.value)}
                />

                <label >Password</label>
                <input type="password" required 
                   
                   value= {password}
                   onChange={(e)=>setPassword(e.target.value)}
                />


                <button>SAVE</button>
  

            </form> */}

             <Addcourse id={id} setRender={setRender} render={render}/>
            {(courses.length===0) && <h2>There is no courses assigned to this teacher</h2>}
            {!(courses.length===0) &&<Courseslist setRender={setRender} render={render} courses={courses} id={id}/>}
        </div>
    )
}

export default EditTeacher
