import React, { useState,useEffect } from 'react'
import Deliberationrow1 from './Deliberationrow1'

const Deliberation1 = ({group}) => {

    
    const [grades,setGrades] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/grades/deliberation/' , {
        method:'put',
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({level:"1",group:group})
     }).then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        console.log("response is here-----------------------")
        console.log(data)
        setGrades(data)
    })},[group])


    return (
        <div className="table">
         <table style={{fontSize:13, textAlign:"center"}}>
           <tr>
               <td>N°</td>
               <td>Matricule</td>
               <td>Nom</td>
               <td>Prénom</td>
               <td style={{fontSize:12, writingMode: "vertical-rl"}}>Groupe</td>
               <td>Moy EE171</td>
               <td>Moy EE173</td>
               <td>Moy EE175</td>
               <td>Moy UEF11</td>
               <td>EE175 Lab</td>
               {/* <td>Moy UEM11</td> */}
               <td>Moy EL103</td>
               <td>Moy EE121</td>
               <td>Moy UET11</td>
               <td>Moy sem1</td>
               <td style={{fontSize:12, writingMode: "vertical-rl"}}>Cr.sem1</td>
               <td>Moy EE172</td>
               <td>Moy EE174</td>
               <td>Moy EE176</td>
               <td>Moy EE178</td>
               <td>Moy UEF21</td>
               <td>Moy EE122</td>
               <td>Moy EE178L</td>
               <td>Moy UEM21</td>
               <td>Moy EL104</td>
               {/* <td>Moy UET21</td> */}
               <td>Moy EE102</td>
               {/* <td>Moy UED21</td> */}
               <td>Moy sem2</td>
               <td style={{fontSize:12, writingMode: "vertical-rl"}}>Cr.sem2</td>
               <td>Moy L1</td>
               <td style={{fontSize:12, writingMode: "vertical-rl"}} >Cr.L1</td>
               <td>Décision</td>
               


           </tr>
         
            { grades  && <>{grades.map((grade,index)=> (
               <Deliberationrow1 grade={grade} index={index}/>
                  
                 ))}</>}




         </table>
        </div>
    )
}

export default Deliberation1
