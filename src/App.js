import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import FeaturesOne from './Components/FeaturesOne/FeaturesOne';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/">
        <Dashboard></Dashboard>
      </Route>
      <Route exact path="/FeaturesOne">
        <FeaturesOne></FeaturesOne>
      </Route>
    </Switch>
  </Router>

  );
}

export default App;