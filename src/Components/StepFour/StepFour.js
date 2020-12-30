import React, { useContext } from 'react';
import { UserContext } from '../../App';
const StepFour = () => {
    const [loggedInInput, setLoggedInInput] = useContext(UserContext);
    return (
        <form >
        <div class="form-row ">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['LocalDSSOffice']} onChange={(e)=>setLoggedInInput({...loggedInInput, "LocalDSSOffice" : e.target.value})}  placeholder="Local DSS Office:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['RegionalOfficeName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "RegionalOfficeName" : e.target.value})} placeholder="Regional Office Name:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['DSSAddress']} onChange={(e)=>setLoggedInInput({...loggedInInput, "DSSAddress" : e.target.value})} placeholder="Address:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" id="inputPassword4" value={loggedInInput['DSSCity']} onChange={(e)=>setLoggedInInput({...loggedInInput, "DSSCity" : e.target.value})}  placeholder="City:"/>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['DSSState']} onChange={(e)=>setLoggedInInput({...loggedInInput, "DSSState" : e.target.value})} placeholder="State:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['DSSZIP']} onChange={(e)=>setLoggedInInput({...loggedInInput, "DSSZIP" : e.target.value})} placeholder="ZIP:"/>
            </div>
        </div>
        </form>
    );
};

export default StepFour;