import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Facility from '../Facility/Facility';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelpCenter from '../HelpCenter/HelpCenter';
import Sidebar from '../Sidebar/Sidebar';
import StepAll from '../StepAll/StepAll';
const Home = () => {
    const [stepNum, setStepNum] = useState(0)
    const setStep = (n) =>{
        setStepNum(n);
        }
    return (
        <section>
            <Header></Header>
            <div className="container-fluid row m-0 p-0">
                <div className="col-lg-2 m-0 p-0">
                    <Sidebar setStep={setStep}></Sidebar>
                </div>
                <div className="col-lg-10">
                    <div className="row">
                    <div className="col-lg-9">
                    <div className="d-flex align-items-center justify-content-center m-5">
                        <div className=" text-center">
                            <h2>Welcome RCFE Baddy</h2>
                            <p>please Sign in your Account</p>
                            <button className="btn" style={{backgroundColor: "#4ABC7B"}}>
                                <Link to="/Dashboard" className="text-white">
                                        <span>Sign in</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <HelpCenter></HelpCenter>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <Footer></Footer>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;