import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
const StepFive = () => {
    const [isFacility, setFacility] = useState('no');
    const [loggedInInput, setLoggedInInput] = useContext(UserContext);
    return (
        <form >
            <div class="form-row ">
                    {/* <div className="col-12 ml-0 mb-3 d-flex">
                        <span className="mr-3">Are you in charge of this facility?</span>
                        <div class="form-check mr-3">
                        <input onClick={(e)=>setFacility(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="yes"/>
                        <label class="form-check-label" for="exampleRadios1">
                           Yes
                        </label>
                        </div>
                        <div class="form-check">
                        <input onClick={(e)=>setFacility(e.target.value)} class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="no" checked/>
                        <label class="form-check-label" for="exampleRadios2">
                            No
                        </label>
                        </div>
                    </div> */}
            
                {/* {
                    isFacility === 'yes' && <div className="form-row">
                            <div className="col-12">
                            <span className="mx-2">Role: </span>
                            <div class="form-check form-check-inline">
                                <input value={loggedInInput['Owner']} onClick={(e)=>setLoggedInInput({...loggedInInput, "Owner" : e.target.value})} class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Owner"/>
                                <label class="form-check-label" for="inlineCheckbox1">Owner</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input value={loggedInInput['Administrator']} onClick={(e)=>setLoggedInInput({...loggedInInput, "Administrator" : e.target.value})} class="form-check-input" type="checkbox" id="inlineCheckbox2" value="Administrator"/>
                                <label class="form-check-label" for="inlineCheckbox2">Administrator </label>
                            </div>
                            </div>
                        </div>
                } */}
                    {/* {
                        isFacility === 'no' &&  */}
                        <div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeFirstName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeFirstName" : e.target.value})}  placeholder="First Name:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeLastName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeLastName" : e.target.value})} placeholder="Last Name:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeZip']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeZip" : e.target.value})} placeholder="Zip:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeAddress']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeAddress" : e.target.value})} placeholder="Address:"></input>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeCity']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeCity" : e.target.value})} placeholder="City:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeState']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeState" : e.target.value})} placeholder="State:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                <input type="text" class="form-control" value={loggedInInput['chargePhone']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargePhone" : e.target.value})} placeholder="Phone:"></input>
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" value={loggedInInput['chargeEmail']} onChange={(e)=>setLoggedInInput({...loggedInInput, "chargeEmail" : e.target.value})} placeholder="Email:"></input>
                                </div>
                            </div>
                            </div>
                {/* } */}
            </div>
        </form>
    );
};

export default StepFive;