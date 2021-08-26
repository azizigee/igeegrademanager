import {Link} from "react-router-dom"


const NavSt = () => {  
   

    return (
      <container className="contain">
      <nav className = "navbar">
            <h1>Students</h1>
            <div className= "links">
                <Link to="/admin/students/createst">New Student</Link>
            </div>
      </nav>

        </container>
    )
}

export default NavSt
