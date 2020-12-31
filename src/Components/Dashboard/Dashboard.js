import React, { useState } from 'react';
import Facility from '../Facility/Facility';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HelpCenter from '../HelpCenter/HelpCenter';
import Sidebar from '../Sidebar/Sidebar';
import StepAll from '../StepAll/StepAll';

const Dashboard = () => {
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
                    <Facility></Facility>
                    <StepAll stepNum={stepNum}></StepAll>
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

export default Dashboard;