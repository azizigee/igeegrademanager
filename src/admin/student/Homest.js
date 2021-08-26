import { useState, useEffect } from "react"
import StudentsList from "./StudentsList"


const Homest = () => {
    const [render,setRender]= useState(false)
    const [students, setStudents]=useState(null)
    useEffect(()=>{fetch('http://localhost:5000/students')
    .then(res=>{
        if(!res.ok){console.log('there is  problem')}
        return res.json()
    }).then(data=>{
        console.log(data)
        setStudents(data)
    })
},[render])

    return (
        <div className= "homest">
            <h1>Students List:</h1>
            {!students && <h3>failed to get data....</h3>}
           {students && <StudentsList students={students} render={render} setRender={setRender}/>}
        </div>
    )
}

export default Homest
