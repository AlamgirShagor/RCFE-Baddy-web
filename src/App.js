import React, { createContext } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState } from 'react';
import StepOne from './Components/StepOne/StepOne';
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [loggedInInput, setLoggedInInput] = useState({});
  const [currentStep, setCurrentStep] = useState({});
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, loggedInInput, setLoggedInInput, currentStep, setCurrentStep]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/Home">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/StepOne">
          <StepOne></StepOne>
        </Route>
        <PrivateRoute path="/Dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route exact path="/Login">
          <Login></Login>
        </Route>
        <Route path="*">
            <NotFound></NotFound>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;