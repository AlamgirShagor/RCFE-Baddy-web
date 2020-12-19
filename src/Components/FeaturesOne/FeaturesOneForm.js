import React from 'react';

const FeaturesOneForm = () => {
    return (
        <div className="m-3">
            <form>
            <div class="form-row">
            <div class="form-group col-md-6">    
                <label for="firstName">Email</label>
                <input type="text" class="form-control" id="firstName" placeholder="First name"></input>
                </div>
                <div class="form-group col-md-6">
                <label for="lestName">Email</label>
                <input type="text" class="form-control" id="lestName" placeholder="Last name"></input>
                </div>
                    <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <div class="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
                </div>
                <div class="form-group">
                    <label for="inputAddress2">Address 2</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity"></input>
                    </div>
                    <div class="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip"></input>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
        </div>
    );
};

export default FeaturesOneForm;