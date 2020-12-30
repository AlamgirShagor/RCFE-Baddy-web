import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../image/L4.jpg'
import { useHistory, useLocation } from 'react-router-dom';

import { initializeLoginFramework, handleSignOut} from '../Login/loginManager';
const Header = () => {
    initializeLoginFramework();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      });
      
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
    

    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#1B74D0"}}>
            <Link to="/">
                <img style={{width: "100px"}} src={logo} alt=""/>
            </Link>
        <div className="ml-auto">
        { loggedInUser ?  <button className="btn" style={{backgroundColor: "#4ABC7B", color: "#fff"}} onClick={signOut}>Sign Out</button>  :  <button className="btn" style={{backgroundColor: "#4ABC7B"}}>
                <Link to="/Dashboard" className="text-white">
                        <span>Sign in</span>
                </Link>
            </button> } 
        </div>
        </nav>
    );
};

export default Header;