import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
const StepThree = () => {
const [form, setForm] = useState('individual');
const [isLicensee, setLicensee] = useState('no');
const [loggedInInput, setLoggedInInput] = useContext(UserContext);
    return (
        
        <form >
        <div className="form-row">
        <div class="input-group col mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Licensee Type:</label>
        </div>
        <select value={form} class="custom-select"onChange={(e)=>setForm(e.target.value)}  id="inputGroupSelect01">
            <option value='individual' selected>Individual </option>
            <option value='limited'>Limited Liability Corporation</option>
            <option value='limited'>Partnership</option>
            <option value="limited">Corporation</option>
        </select>
        </div>
        </div>
        
            {
                form === 'individual' && <div>
                <div class="form-row ">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualFirstName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualFirstName" : e.target.value})}  placeholder="First Name: "></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualLastName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualLastName" : e.target.value})} placeholder="Last Name:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualAddress']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualAddress" : e.target.value})} placeholder="Address:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualCity']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualCity" : e.target.value})} id="inputPassword4" placeholder="City:"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualState']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualState" : e.target.value})} placeholder="State:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualCounty']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualCounty" : e.target.value})} placeholder="County:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualZip']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualZip" : e.target.value})} placeholder="Zip:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualPhone']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualPhone" : e.target.value})} placeholder="Phone:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['individualEmail']} onChange={(e)=>setLoggedInInput({...loggedInInput, "individualEmail" : e.target.value})} placeholder="Email:"></input>
                    </div>
                </div>
            </div>
            
            }
            
            {
                form === 'limited' &&  <div>
                <div class="form-row ">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['EntityName']} onChange={(e)=>setLoggedInInput({...loggedInInput, "EntityName" : e.target.value})}  placeholder="Entity Name:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['Address']} onChange={(e)=>setLoggedInInput({...loggedInInput, "Address" : e.target.value})} placeholder="Address:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['City']} onChange={(e)=>setLoggedInInput({...loggedInInput, "City" : e.target.value})} placeholder="City:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['State']} onChange={(e)=>setLoggedInInput({...loggedInInput, "State" : e.target.value})} id="inputPassword4" placeholder="State:"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['Zip']} onChange={(e)=>setLoggedInInput({...loggedInInput, "Zip" : e.target.value})} placeholder="Zip:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['Phone']} onChange={(e)=>setLoggedInInput({...loggedInInput, "Phone" : e.target.value})} placeholder="Phone:"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <input type="text" class="form-control" value={loggedInInput['Email']} onChange={(e)=>setLoggedInInput({...loggedInInput, "Email" : e.target.value})} placeholder="Email:"></input>
                    </div>
                </div>
            </div>
               
            }
            {/* {
                form === 'partnership' &&  <h2>this is partnership</h2>
               
            }
            {
                form === 'corporation' &&  <h2>this is corporation</h2>
               
            } */}
        
    </form>
    );
};

export default StepThree;