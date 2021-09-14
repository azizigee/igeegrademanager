import { useState } from 'react'
import React from 'react'
import { useHistory, useParams } from "react-router-dom"

const Addcourse = ({id,setRender,render}) => {


const courses= {l1:[{coursename:"Mathematics I",coursecode:"EE171"},{coursename:"Chemistry I",coursecode:"EE173"},{coursename:"Physics I",coursecode:"EE175"},
                    {coursename:"Physics I Lab",coursecode:"EE175L"},{coursename:"English I",coursecode:"EL103"},{coursename:"Office Suite",coursecode:"EE121"},
                    {coursename:"Mathematics II",coursecode:"EE172"},{coursename:"Mathematics III",coursecode:"EE174"},{coursename:"Chemistry II",coursecode:"EE176"},
                    {coursename:"Physics II",coursecode:"EE178"},{coursename:"Introduction to C programming",coursecode:"EE122"},{coursename:"Physics II Lab",coursecode:"EE178L"},
                    {coursename:"English II",coursecode:"EL104"},{coursename:"Electrical Engineering I",coursecode:"EE102"}],

                l2:[{coursename:"Mathematics III (O.D.E)",coursecode:"EE271"},{coursename:"Physics III",coursecode:"EE273"},{coursename:"Active Devices I",coursecode:"EE241"},{coursename:"Active Devices I Lab",coursecode:"EE241L"}],
                
                l3:[{coursename:"Computer Architacture",coursecode:"EE321"},{coursename:"Communication Principles",coursecode:"EE311"},{coursename:"Microprocessor System Design",coursecode:"EE323"}]}
 //-------------------------------------------------------------------------------------------------------------------- 
 const hystory= useHistory()
const [level,setLevel]=useState('1')
const [section,setSection]=useState('')
const [group,setGroup]=useState('')
const [course,setCourse]=useState(courses.l1[0])

const handeleSubmit = (e)=>{
   e.preventDefault()
   const teacher={level,section,group,coursename:course.coursename,coursecode:course.coursecode};
   
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

            <select name="level"  onChange={(e)=>{setLevel(null)
       setTimeout(()=>{setLevel(e.target.value); setCourse(courses[`l${e.target.value}`][0]);},1)}} >
            <option value="1">level 1</option>
            <option value="2">level 2</option>
            <option value="3">level 3</option>

            </select>

            <label >course </label>

            {level && <select name="course"  onChange={(e)=>{setCourse(courses[`l${level}`][e.target.value])

            }} >
            
            { 
            courses[`l${level}`].map((course,index)=>(<option value={index}>{courses[`l${level}`][index].coursename}/{courses[`l${level}`][index].coursecode}</option>
    ))
            }
            </select>}

                 <label >section</label>
                <input type="text"  
                   value= {section}
                   onChange={(e)=>setSection(e.target.value)}
                />
                <label >group</label>
                <input type="text"  
                   value= {group}
                   onChange={(e)=>setGroup(e.target.value)}
                />
                
           <button>ADD</button>

            </form>
            
        </div>
    )
}

export default Addcourse
