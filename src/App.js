import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import AllCampuses from "./components/AllCampuses";
import NewCampus from "./components/NewCampus";
import DisplayCampus from "./components/DisplayCampus";
import SingleCampus from "./components/SingleCampus";
import EditCampus from "./components/EditCampus";

import AllStudents from "./components/AllStudents";
import NewStudent from "./components/NewStudent";
import SingleStudent from "./components/SingleStudent";
import Test from "./components/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/campuses">All Campuses</Link>
        <Link to="/students">All Students</Link>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/campuses" component={AllCampuses}></Route>
          <Route exact path="/campuses/new" component={NewCampus}></Route>
          <Route exact path="/campus/edit/:id" component={EditCampus}></Route>
          <Route exact path="/campuses/:id" component={SingleCampus}></Route>
          <Route exact path="/students" component={AllStudents}></Route>
          <Route exact path="/student/new" component={NewStudent}></Route>
          <Route exact path="/students/:id" component={SingleStudent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
