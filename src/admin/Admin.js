//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router,Route, Switch} from "react-router-dom"
import Students from "./student/Students";
import NavAdm from "./NavAdm";
import Homeadm from "./Homeadm";
import Teachers from "./teacher/Teachers";
import Deliberation from "./deliberation/Deliberation"


function Admin() {
  return (
    <Router>
    <div className="App">
      <NavAdm/>
       <Switch>
         <Route exact  path="/admin">
             <Homeadm/>
         </Route>
         <Route  path="/admin/Students">
             <Students/>
         </Route>
         <Route  path="/admin/Teachers">
             <Teachers/>
         </Route>
         <Route  path="/admin/deliberation">
             <Deliberation/>
         </Route>
       </Switch>
  
      
    </div>
    </Router>
  );
}

export default Admin;