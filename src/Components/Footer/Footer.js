import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="row d-flex justify-content-center my-2  ">
            <small className="mr-1 text-center">
            <span> 	&#169; </span>
            {(new Date().getFullYear())}
             All right reserved
            </small>
            <Link style={{color: "#5184D7"}} to="/">Privacy Policy</Link>
        </div>
    );
};

export default Footer;