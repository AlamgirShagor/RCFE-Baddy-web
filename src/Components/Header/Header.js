import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/L4.jpg'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#1B74D0"}}>
            <Link to="/">
                <img style={{width: "100px"}} src={logo} alt=""/>
            </Link>
        <div className="ml-auto">
            <button className="btn" style={{backgroundColor: "#4ABC7B"}}>
                <Link to="/" className="text-white">
                        <span>Sign in</span>
                </Link>
            </button>
        </div>
        </nav>
    );
};

export default Header;