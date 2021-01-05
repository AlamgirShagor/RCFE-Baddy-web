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
import 'firebase/firestore';
import "firebase/database";
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
var db = firebase.firestore();
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
    const [loggedInInput, setLoggedInInput ] = useContext(UserContext);
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    
    const handleNext0 = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        db.collection("Facility_Information_RCFE_Baddy_web")
      .add({
        FacilityName: loggedInInput.FacilityName,
        FacilityAddress: loggedInInput.FacilityAddress,
        FacilityCity: loggedInInput.FacilityCity,
        FacilityCounty: loggedInInput.FacilityCounty,
        FacilityState: loggedInInput.FacilityState,
        FacilityZip: loggedInInput.FacilityZip
      })
      .catch((error) => {
        alert(error.message);
      });
    };
    const handleNext1 = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      db.collection("Facility_Information_RCFE_Baddy_web")
    .add({

      FacilityPhonePublic: loggedInInput.FacilityPhonePublic,
      FacilityPhoneDirect: loggedInInput.FacilityPhoneDirect,
      FacilityFax: loggedInInput.FacilityFax,
      FacilityEmail: loggedInInput.FacilityEmail,
      FacilityWebSite: loggedInInput.FacilityWebSite

    })
    .catch((error) => {
      alert(error.message);
    });
  };
  const handleNext2 = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    db.collection("Facility_Information_RCFE_Baddy_web")
  .add({

        type: loggedInInput.type,

        individualFirstName: loggedInInput.individualFirstName,
        individualLastName: loggedInInput.individualLastName,
        individualAddress: loggedInInput.individualAddress,
        individualCity: loggedInInput.individualCity,
        individualState: loggedInInput.individualState,
        individualCounty: loggedInInput.individualCounty,
        individualZip: loggedInInput.individualZip,
        individualPhone: loggedInInput.individualPhone,
        individualEmail: loggedInInput.individualEmail,

        EntityName: loggedInInput.EntityName,
        Address: loggedInInput.Address,
        City: loggedInInput.City,
        State: loggedInInput.State,
        County: loggedInInput.County,
        Zip: loggedInInput.Zip,
        Phone: loggedInInput.Phone,
        Email: loggedInInput.Email

  })
  .catch((error) => {
    alert(error.message);
  });
};
const handleNext3 = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  db.collection("Facility_Information_RCFE_Baddy_web")
.add({

        LocalDSSOffice: loggedInInput.LocalDSSOffice,
        RegionalOfficeName: loggedInInput.RegionalOfficeName,
        DSSAddress: loggedInInput.DSSAddress,
        DSSCity: loggedInInput.DSSCity,
        DSSState: loggedInInput.DSSState

})
.catch((error) => {
  alert(error.message);
});
};
const handleNext4 = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
  db.collection("Facility_Information_RCFE_Baddy_web")
.add({

        chargeFirstName: loggedInInput.chargeFirstName,
        chargeLastName: loggedInInput.chargeLastName,
        chargeZip: loggedInInput.chargeZip,
        chargeCity: loggedInInput.chargeCity,
        chargeState: loggedInInput.chargeState,
        chargeZip: loggedInInput.chargeZip,
        chargePhone: loggedInInput.chargePhone,
        chargeEmail: loggedInInput.chargeEmail

})
.catch((error) => {
  alert(error.message);
});
};
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmitDB = () => {
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
            <div className="d-flex justify-content-between mb-2">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              {activeStep === 0 &&<Button variant="contained" color="primary" onClick={handleNext0}>
              Next
              </Button>

              }
              {activeStep === 1 &&<Button variant="contained" color="primary" onClick={handleNext1}>
              Next
              </Button>

              }
              {activeStep === 2 &&<Button variant="contained" color="primary" onClick={handleNext2}>
              Next
              </Button>

              }
              {activeStep === 3 &&<Button variant="contained" color="primary" onClick={handleNext3}>
              Next
              </Button>

              }
              {activeStep === 4 &&<Button variant="contained" color="primary" onClick={handleNext4}>
                {activeStep === steps.length - 1 ? 'save' : 'Next'}
              </Button>

              }
              {/* <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'save' : 'Next'}
              </Button> */}
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default StepAll;