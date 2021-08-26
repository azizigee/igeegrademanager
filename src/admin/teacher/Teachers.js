//import logo from './logo.svg';
//import './App.css';
import Navteach from "./Navteach";
import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
import CreateTeacher from "./CreateTeacher";
import Homest from "./Homest";
import EditTeacher from "./EditTeacher";

function Teachers() {
  return (
    <Router>
    <div className="student">
      <Navteach/>
      <div className ="content">
        <Switch>
        <Route exact  path="/admin/teachers">
             <Homest/>
          </Route>
          <Route  path="/admin/teachers/createteach">
             <CreateTeacher/>
          </Route>
          <Route  path="/admin/teachers/editteach/:id">
             <EditTeacher/>
          </Route>
        </Switch>
      </div>
      
    </div>
    </Router>
  );
}

export default Teachers;
