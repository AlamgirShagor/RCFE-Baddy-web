import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';


const Sidebar = ({setStep}) => {
    // const [currentStep, setCurrentStep] = useContext(UserContext);
    // const setStep = (n) =>{
    //     setCurrentStep(n)
    //   }
    return (
        <div className="sidebar py-lg-5 pb-3 px-4 ml-0">
            <nav class=" navbar-dark navbar-expand-lg">
            <button class="navbar-toggler text-white mb-5" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="list-unstyled">
                <li>
                    {/* <Link to="/FeaturesOne" className="text-white dropdown-toggle" id="dropdownMenu2"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Features One</span>
                    </Link> */}
                    <button class="listitem mb-2" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Facility Information</span>
                    </button>
                    
                    <div class="collapse" id="collapseOne">
                        <ul className="list-unstyled" style={{marginLeft: "30px"}}>
                            <li className="my-2">
                                <Link to="/BasicInformation" >
                                   <span onClick={()=>setStep(0)} >Basic Information</span>
                                </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/AdditionalDetails">
                                 <span onClick={()=>setStep(1)} >Additional Details</span>
                            </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/LicenseeInformation">
                                 <span onClick={()=>setStep(2)}>Licensee Information</span>
                            </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/DSS/OMBUDSMAN">
                                 <span onClick={()=>setStep(3)} >DSS / OMBUDSMAN</span>
                            </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/PersonInCharge">
                                <span onClick={()=>setStep(4)}>Person In charge</span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </li>
                <li>
                <button class="listitem mb-2" type="button" data-toggle="collapse" data-target="#collapseTow" aria-expanded="false" aria-controls="collapseTow">
                        <FontAwesomeIcon icon={faGripHorizontal} />  <span>Features Tow</span>
                    </button>
                    
                    <div class="collapse" id="collapseTow">
                    <ul className="list-unstyled" style={{marginLeft: "30px"}}>
                            <li className="my-2">
                                <Link to="/FeaturesOne">
                                   <span>Import</span>
                                </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/FeaturesOne">
                                 <span>Corporation Info</span>
                            </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/FeaturesOne">
                                 <span>Special Filings</span>
                            </Link>
                            </li>
                            <li className="my-2">
                            <Link to="/FeaturesOne">
                                <span>other info</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
            </ul>
            </div>
            </nav>
        {/* <ul className="list-unstyled">
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                </Link>
            </li>
            <li>
                <Link to="/" className="text-white">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                </Link>
            </li>
        </ul> */}
    </div>
    );
};

export default Sidebar;