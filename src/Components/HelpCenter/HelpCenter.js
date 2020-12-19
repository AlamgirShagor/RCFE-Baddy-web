import React from 'react';
import SearchBar from '../SearctBar/SearchBar'
import { useForm } from "react-hook-form";

const HelpCenter = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=" card">
            <h4 className="text-white text-center py-2" style={{backgroundColor: "#4EC274"}}>Help Center</h4>
            <div className="card-body">
                <SearchBar></SearchBar>
                <div className="card mt-2">
                    <div className="card-body">
                    <h6>Freqrntly Asked Qustions</h6>
                    <form onChange={handleSubmit(onSubmit)}>
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 1" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 2" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 3" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 4" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 5" ref={register} />
                        
                    </form>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="card">
                    <div className="card-body">
                    <h6>Freqrntly Asked Qustions</h6>
                    <form onChange={handleSubmit(onSubmit)}>
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 1" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 2" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 3" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 4" ref={register} />
                        <input style={{borderTop:"none",borderRight: "none", borderLeft: "none"}} className="my-1 form-control form-control-sm" placeholder="About Our Services" name="Qus 5" ref={register} />
                        
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpCenter;