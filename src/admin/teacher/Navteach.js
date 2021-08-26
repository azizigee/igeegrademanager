import {Link} from "react-router-dom"


const Navteach = () => {  
   

    return (
      <container className="contain">
      <nav className = "navbar">
            <h1>Teachers</h1>
            <div className= "links">
                <Link to="/admin/teachers/createteach">New Teacher</Link>
            </div>
      </nav>

        </container>
    )
}

export default Navteach
