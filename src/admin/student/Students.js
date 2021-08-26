//import logo from './logo.svg';
//import './App.css';
import NavSt from "./NavSt";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
import CreateStudent from "./CreateStudent";
import Homest from "./Homest";
import EditStudent from "./EditStudent";

function Students() {
  return (
    <Router>
    <div className="student">
      <NavSt/>
      <div className ="content">
        <Switch>
        <Route exact  path="/admin/students">
             <Homest/>
          </Route>
          <Route  path="/admin/students/createst">
             <CreateStudent/>
          </Route>
          <Route  path="/admin/students/editst/:id">
             <EditStudent/>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default Students;
