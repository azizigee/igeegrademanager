import { useState, useEffect } from "react"
import TeachersList from "./TeachersList"

const Homest = () => {
    const [render,setRender]= useState(false)
    const [teachers, setTeachers]=useState(null)
    useEffect(()=>{fetch('http://localhost:5000/teachers')
    .then(res=>{
        if(!res.ok){}
        return res.json()
    }).then(data=>{
        //console.log(data)
        setTeachers(data)
    })
},[render])

    return (
        <div className= "homest">
            <h1>Teachers:</h1>
            {!teachers && <h3>failed to get data....</h3>}
           {teachers && <TeachersList teachers={teachers} render={render} setRender={setRender}/>}
        </div>
    )
}

export default Homest
