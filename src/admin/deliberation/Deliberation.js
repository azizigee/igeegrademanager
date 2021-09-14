import React from 'react'
import {useState} from "react"
import Deliberation1 from './Deliberation1'
import Deliberation2 from './Deliberation2'
import Deliberation3 from './Deliberation3'


const Deliberation = () => {

    const [level,setLevel]= useState(null)
    const [group,setGroup]= useState("")
    
    
    return (
        <div>
         
             <label style={{margin: "30 px"}}>select level </label>
            <select
         
           onChange={ (e)=>setLevel(e.target.value ) }
           >
               <option value={null}> </option>
               <option value={"1"}>Level 1 </option>
               <option value={"2"}>Level 2 </option>
               <option value={"3"}>Level 3 </option>
           </select> 

           <label>group </label>
{           <input type="text"  
                   
                   onChange={(e)=>setGroup(e.target.value)}
                />}
       

                {(level==="1")&& <Deliberation1 group={group}/>}
                {(level==="2")&& <Deliberation2 group={group}/>}
                {(level==="3")&& <Deliberation3 group={group}/>}

           

           
        </div>
    )
}

export default Deliberation
