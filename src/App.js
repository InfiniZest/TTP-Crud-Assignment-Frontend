import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AllCampuses from "./components/AllCampuses";
import NewCampus from "./components/NewCampus";
import DisplayCampus from "./components/DisplayCampus";
import SingleCampus from "./components/SingleCampus";
import AllStudentsContainer from "./components/AllStudentsContainer";
import AllStudents from "./components/AllStudents";
import NewStudent from "./components/NewStudent";

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/campuses" component={AllCampuses}></Route>
          <Route exact path="/campuses/new" component={NewCampus}></Route>
          <Route exact path="/campuses/:id" component={SingleCampus}></Route>
          <Route exact path="/students" component={AllStudentsContainer}></Route>
          <Route exact path="/students/new" component={NewStudent}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
