import {Link} from "react-router-dom"


const Navbar = () => {  
   

    return (
      <container className="contain">
      <nav className = "navbar">
            <Link to="/">
              <h1>IGEE GRADS</h1>
            </Link>
            <div className= "links">
                <Link to="/admin">Admin</Link>
                <Link to="/teachers">Teacher</Link>
            </div>
      </nav>

        </container>
    )
}

export default Navbar
