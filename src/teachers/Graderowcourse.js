import React from 'react'
import {useState,useEffect} from "react"

const Graderowcourse = ({grades,setGrades,index,course,grade}) => {
    const [control,setControl]=useState(grades[index][`grades${course.level}`][`${course.coursecode}`].control)
    const [exam,setExam]=useState(grades[index][`grades${course.level}`][`${course.coursecode}`].exam)
    const [makeup,setMakeup]=useState(grades[index][`grades${course.level}`][`${course.coursecode}`].makeup)
    
/*     const handleChange = async ()=>{
        const tgrades = grades
        await setGrades(tgrades)
  
        tgrades[index][`grades${course.level}`][`${course.name}`].control= control
        tgrades[index][`grades${course.level}`][`${course.name}`].exam=exam   
        tgrades[index][`grades${course.level}`][`${course.name}`].makeup=makeup 
                
               
                  console.log(tgrades)
                   } */
//----------------------------------------------------------------------------------
useEffect(()=>{
    const tgrades = grades
     

    tgrades[index][`grades${course.level}`][`${course.coursecode}`].control= control
    tgrades[index][`grades${course.level}`][`${course.coursecode}`].exam=exam   
    tgrades[index][`grades${course.level}`][`${course.coursecode}`].makeup=makeup 
            
    setGrades(tgrades)
              


},[control,exam,makeup,course])




    return (
        <div className ="graderow">
            <output className="rnumber"   >{grades[index].rnumber}   </output>
            <output className="fname"   > | {grades[index].fname }  </output>
            <output className="lname"   >| {grades[index].lname }  </output>   
                
               <input input className="gradefield" type="number" required 
                  value= {control}
                  onChange={ async (e)=>{setControl(e.target.value)
                                   }}
               />

               <input className="gradefield" type="number" required 
                  value= {exam}
                  onChange={ async (e)=>{setExam(e.target.value)
                                    }}
               />

               <input input className="gradefield" type="number" required 
                  value= {makeup}
                  onChange={ async (e)=>{setMakeup(e.target.value)
                               }}
               />
               

        </div>
        
    )
}

export default Graderowcourse
