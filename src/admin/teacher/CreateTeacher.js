import { useState } from "react"
import { useHistory } from "react-router-dom"
const CreateTeacher = () => {
    
    const [fname,setFname] = useState('')
    const [lname,setLname] = useState('')
    const [password,setPassword] = useState('')

    const hystory= useHistory()

    const handeleSubmit = (e)=>{
    e.preventDefault()
    const student={fname,lname,password};
     console.log(student.fname)
    fetch('http://localhost:5000/teachers', {
       method:'post',
       headers:{"Content-Type":"application/json"},
       body: JSON.stringify(student)
    }).then(()=>{hystory.push('/admin/teachers')
   })}

    return (
        <div className="createStudent" >
            <h3>New Student details</h3>
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

                <label >PassWord</label>
                <input type="password" required 
                   
                   value= {password}
                   onChange={(e)=>setPassword(e.target.value)}
                />

                
                <button>ADD</button>
  

            </form>
        </div>
    )
}

export default CreateTeacher