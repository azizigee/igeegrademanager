import React from 'react'
import {useState,useEffect} from "react"
const Graderowlab = ({grades,setGrades,index,course}) => {
    const [grade,setGrade]=useState(grades[index][`grades${course.level}`][`${course.coursecode}`].grade)

    
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
     

    tgrades[index][`grades${course.level}`][`${course.coursecode}`].grade= grade
  
            
    setGrades(tgrades)
              


},[grade,course])




    return (
        <div className ="graderow">
             <output className="rnumber"   >{grades[index].rnumber}   </output>
            <output className="fname"   > | {grades[index].fname }  </output>
            <output className="lname"   >| {grades[index].lname }  </output> 
               
                
               <input className="gradefield" type="number" required 
                  value= {grade}
                  onChange={ async (e)=>{setGrade(e.target.value)
                                   }}
               />

               
   

        </div>
    )
}

export default Graderowlab
