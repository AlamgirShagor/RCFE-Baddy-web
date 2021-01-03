import React, { useContext } from 'react';
import { UserContext } from '../../App';

const StepTow = () => {
    const [loggedInInput, setLoggedInInput] = useContext(UserContext);
    return (
        <form >
        <div class="form-row ">
            <div class="form-group col-md-6">
               <input type="tel" class="form-control" value={loggedInInput['FacilityPhonePublic']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityPhonePublic" : e.target.value})} placeholder="Facility Phone (Public):"/>
            </div>
            <div class="form-group col-md-6">
                <input type="tel" class="form-control" value={loggedInInput['FacilityPhoneDirect']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityPhoneDirect" : e.target.value})} placeholder="Facility Phone(Direct):"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['FacilityFax']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityFax" : e.target.value})}  placeholder="Facility Fax:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="email" class="form-control" value={loggedInInput['FacilityEmail']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityEmail" : e.target.value})} placeholder="Facility Email:"/>
            </div>
                
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <input type="text" value={loggedInInput['FacilityWebSite']} onChange={(e)=>setLoggedInInput({...loggedInInput, "FacilityWebSite" : e.target.value})} class="form-control" placeholder="Web Site:"/>
            </div>
            {/* <div class="form-group col-md-6">
                <input type="text" value={loggedInInput['AdditionalCounty']} onChange={(e)=>setLoggedInInput({...loggedInInput, "AdditionalCounty" : e.target.value})} class="form-control" placeholder="County:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" value={loggedInInput['AdditionalState']} onChange={(e)=>setLoggedInInput({...loggedInInput, "AdditionalState" : e.target.value})} class="form-control" placeholder="State:"/>
            </div>
            <div class="form-group col-md-6">
                <input type="text" class="form-control" value={loggedInInput['AdditionalZip']} onChange={(e)=>setLoggedInInput({...loggedInInput, "AdditionalZip" : e.target.value})}  placeholder="Zip:"/>
            </div> */}
        </div>
        </form>
    );
};

export default StepTow;