import { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
const EditStudent = () => {

   const{id}= useParams()
   //const [student, setStudent]=useState(null)

   const [fname,setFname] = useState('')
   const [lname,setLname] = useState('')
   const [rnumber,setRnumber] = useState('')
   const [level,setLevel] = useState('')
   const [section,setSection] = useState('')
   const [group,setGroup] = useState('')

    const hystory= useHistory()


    useEffect(()=>{fetch('http://localhost:5000/students/'+ id)
    .then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        //console.log(data)
        setFname(data.fname)
        setLname(data.lname)
        setRnumber(data.rnumber)
        setLevel(data.level)
        setSection(data.section)
        setGroup(data.group)
     
    })
},[id])




    const handeleSubmit = (e)=>{
    e.preventDefault()
    const student={fname,lname,rnumber,level,section,group};
     console.log(student.fname)
    fetch('http://localhost:5000/students/'+ id, {
       method:'put',
       headers:{"Content-Type":"application/json"},
       body: JSON.stringify(student)
    }).then(()=>{hystory.push('/admin/students')
   })}

    return (
        <div className="createStudent" >
            <h3>Editing Student details</h3>
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

                <label >Regitration Number</label>
                <input type="number" required 
                   
                   value= {rnumber}
                   onChange={(e)=>setRnumber(e.target.value)}
                />

                <label >Level</label>
                <input type="number" required 
                   
                   value= {level}
                   onChange={(e)=>setLevel(e.target.value)}
                />

                <label >Section</label>
                <input type="number" required 
                   
                   value= {section}
                   onChange={(e)=>setSection(e.target.value)}
                />

                <label >Group</label>
                <input type="number" required 
                   
                   value= {group}
                   onChange={(e)=>setGroup(e.target.value)}
                />
                <button>SAVE</button>
  

            </form>
        </div>
    )
}

export default EditStudent
