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
import NotFound from './Components/NotFound/NotFound'
import StepAll from './Components/StepAll/StepAll';
import Sidebar from './Components/Sidebar/Sidebar';

export const UserContext = createContext();

function App() {
  const [loggedInInput, setLoggedInInput] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [activeStep, setActiveStep] = React.useState(3);
  
  return (
    <UserContext.Provider value={[loggedInInput, setLoggedInInput, currentStep, setCurrentStep]}>
      <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/BasicInformation">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/AdditionalDetails">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/LicenseeInformation">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/DSS/OMBUDSMAN">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/PersonInCharge">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/StepOne">
          <StepOne></StepOne>
        </Route>
        <Route exact path="/StepAll">
          <StepAll></StepAll>
        </Route>
        <Route exact path="/sidebar">
          <Sidebar></Sidebar>
        </Route>
        <Route path="/Dashboard">
          <Dashboard></Dashboard>
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