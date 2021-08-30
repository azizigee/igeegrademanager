import React from 'react'
import {useState,useEffect} from "react"

const Graderowcourse = ({grades,setGrades,index,course,grade}) => {
    const [control,setControl]=useState(grades[index][`grades${course.level}`][`${course.name}`].control)
    const [exam,setExam]=useState(grades[index][`grades${course.level}`][`${course.name}`].exam)
    const [makeup,setMakeup]=useState(grades[index][`grades${course.level}`][`${course.name}`].makeup)
    
    const handleChange = async ()=>{
        const tgrades = grades
  
        tgrades[index][`grades${course.level}`][`${course.name}`].control= control
        tgrades[index][`grades${course.level}`][`${course.name}`].exam=exam   
        tgrades[index][`grades${course.level}`][`${course.name}`].makeup=makeup 
                
               await setGrades(tgrades)
                  console.log(tgrades)
                   }


    return (
        <div className ="graderow">
            <label  >{grades[index].rnumber} {grades[index].fname } {grades[index].lname }  </label>
               
                
               <input type="number" required 
                  value= {control}
                  onChange={ (e)=>{setControl(e.target.value)
                                    handleChange()}}
               />

               <input type="number" required 
                  value= {exam}
                  onChange={ (e)=>{setExam(e.target.value)
                                         handleChange()}}
               />

               <input type="number" required 
                  value= {makeup}
                  onChange={ (e)=>{setMakeup(e.target.value)
                                 handleChange()}}
               />
   

        </div>
    )
}

export default Graderowcourse
