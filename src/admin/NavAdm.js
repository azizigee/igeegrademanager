import {Link} from "react-router-dom"


const NavAdm = () => {  
   

    return (
      <container className="contain">
      <nav className = "navbar">
            <Link to="/admin">
              <h1>ADMIN</h1>
            </Link>
            <div className= "links">
                <Link to="/admin/students">Student</Link>
                <Link to="/admin/teachers">Teachers</Link>
            </div>
      </nav>

        </container>
    )
}

export default NavAdm
