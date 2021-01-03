import React, { useContext } from 'react';
import { UserContext } from '../../App';
const StepOne = () => {
    const [loggedInInput, setLoggedInInput] = useContext(UserContext);
    
    return (
        <form >
            <div class="form-row ">
                <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['FacilityName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityName" : e.target.value})} placeholder="Facility Name:"></input>
                </div>
                <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['FacilityAddress']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityAddress" : e.target.value})} placeholder="Facility Address:"></input>
                </div>
                    <div class="form-group col-md-6">
                    <input type="text" class="form-control" value={loggedInInput['FacilityCity']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityCity" : e.target.value})} placeholder="City:"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <input type="text" class="form-control" value={loggedInInput['FacilityCounty']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityCounty" : e.target.value})} placeholder="County:"></input>
                </div>  
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['FacilityState']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityState" : e.target.value})} placeholder="State:"></input>
                </div>
                <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['FacilityZip']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityZip" : e.target.value})}  placeholder="Zip:"></input>
                </div>
            </div>
            </form>
    );
};

export default StepOne;