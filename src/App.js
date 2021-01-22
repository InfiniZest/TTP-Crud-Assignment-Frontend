import logo from "./logo.svg";
import "./App.css";
import AllCampuses from "./components/AllCampuses";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/campuses">All Campuses</Link>
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/campuses" component={AllCampuses}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
