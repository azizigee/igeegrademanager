import { useState } from 'react'
import React from 'react'
import { useHistory, useParams } from "react-router-dom"

const Addcourse = ({id,setRender,render}) => {
   const hystory= useHistory()
const [level,setLevel]=useState('')
const [section,setSection]=useState('')
const [group,setGroup]=useState('')
const [name,setName]=useState('')

const handeleSubmit = (e)=>{
   e.preventDefault()
   const teacher={level,section,group,name};
   
   fetch('http://localhost:5000/teachers/addcourse/'+ id, {
      method:'post',
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(teacher)
   }).then(()=>{
      setRender(!render)
      //hystory.push('/admin/teachers/')
  })}



    return (
        <div className="student-list" >
           <h2>Assigning new course</h2>
            <form onSubmit={handeleSubmit} >
            <label >level</label>
                <input type="text" required 
                   value= {level}
                   onChange={(e)=>setLevel(e.target.value)}
                />
                 <label >section</label>
                <input type="text" required 
                   value= {section}
                   onChange={(e)=>setSection(e.target.value)}
                />
                <label >group</label>
                <input type="text" required 
                   value= {group}
                   onChange={(e)=>setGroup(e.target.value)}
                />
                <label >name</label>
                <input type="text" required 
                   value= {name}
                   onChange={(e)=>setName(e.target.value)}
                />

<button>ADD</button>

            </form>
            
        </div>
    )
}

export default Addcourse
