import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StepOne from '../StepOne/StepOne'
import StepTow from '../StepTow/StepTow'
import StepThree from '../StepThree/StepThree'
import StepFour from '../StepFour/StepFour'
import StepFive from '../StepFive/StepFive'
import { UserContext } from '../../App';
import firebase from "firebase/app";
import firebaseConfig from '../Login/firebaseConfig';
import "firebase/database";
firebase.initializeApp(firebaseConfig);
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Basic Information', 'Additional Details', ' Licensee Information', 'DSS and OMBUDSMAN Contacts', 'Person In charge'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <StepOne></StepOne>;
    case 1:
      return <StepTow></StepTow>;
    case 2:
      return <StepThree></StepThree>;
    case 3:
      return <StepFour></StepFour>;
    case 4:
      return <StepFive></StepFive>;
    default:
      return 'Unknown stepIndex';
  }
}
const StepAll = ({stepNum}) => {
    useEffect(()=>{setActiveStep(stepNum)},[stepNum])
    const [loggedInInput, setLoggedInInput, loggedInUser] = useContext(UserContext);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        const db = firebase.database().ref("data")
        const data ={
        loggedInInput,
        loggedInUser
      };
      db.push(data)
      setLoggedInInput('');
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmitDB = () => {
      setLoggedInInput('');
      setActiveStep(0);
      
    };
    
    return (
        <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed please save your Data..</Typography>
            <Button color="primary" onClick={handleSubmitDB}>Back</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div className="d-flex justify-content-between">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'save' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default StepAll;