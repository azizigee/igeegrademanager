//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
//import Students from "./admin/student/Students";
//import NavAdm from "./admin/NavAdm";
//import Homeadm from "./admin/Homeadm";
//import Teachers from "./admin/teacher/Teachers";
import Admin from "./admin/Admin"
import Navbar from "./Navbar"
import TeachersList from "./teachers/TeachersList"
import Grades from "./teachers/Grades.js"

function App() {
  return (
    <Router>
    <div className="App">
       <Switch>
         <Route exact  path="/">
             <Navbar/>
         </Route>
         <Route  path="/admin">
             <Admin/>
         </Route>
          <Route exact path="/Teachers">
             <TeachersList/>
         </Route> 
         <Route  path="/Teachers/grades/:id">
             <Grades/>
         </Route> 
       </Switch>
  
      
    </div>
    </Router>

  );
}

export default App;