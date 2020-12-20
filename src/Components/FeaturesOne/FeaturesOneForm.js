import React from 'react';
const FeaturesOneForm = () => {
    return (
        <div className="m-1">
            <form >
            <div class="form-row ">
                <div class="form-group col-md-6">
                <input type="text" class="form-control"  placeholder="First name*"></input>
                </div>
                <div class="form-group col-md-6">
                <input type="email" class="form-control" placeholder="Your Email*"></input>
                </div>
                    <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Last name"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <input type="number" class="form-control" id="inputPassword4" placeholder="Your Phone*"></input>
                    </div>
                    
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <input type="password" class="form-control" placeholder="Password*"></input>
                </div>
                <div class="form-group col-md-6">
                <select class="form-control">
                     <option class="hidden"  selected disabled>Please select your Sequrity Question</option>
                      <option>What is your Birthdate?</option>
                      <option>What is Your old Phone Number</option>
                        <option>What is your Pet Name?</option>
                </select>
                </div>
                    <div class="form-group col-md-6">
                    
                    <input type="password" class="form-control" placeholder="Confirm PassWord*"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <input type="text" class="form-control" placeholder="Enter Your Answer"></input>
                    </div>
                    
                </div>
                
            <input type="submit" class="btn" style={{ borderRadius: "1.5rem", background: "#0062cc", color: "#fff", width: "150px"}}  value="Register"/>
            </form>
        </div>
    );
};

export default FeaturesOneForm;