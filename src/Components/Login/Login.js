import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import firebaseConfig from '../Login/firebaseConfig';
import "firebase/database";


import { initializeLoginFramework, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
var db = firebase.firestore();
if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };
  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    console.log(res);
    if(res.success === false){
      alert(res.error)
    }
    // if(res.error){
    //   alert("this Is Worry.")
    // }
    if(redirect){
        history.replace("/Dashboard");
    }
    handelUserDb()
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }else{
      alert("it is not a registered user")
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
        if(res.success === false){
        }
      })
    }
    

    e.preventDefault();
  }
  const handelUserDb = () =>{
    db.collection("User_RCFE_Baddy_web")
      .add({
        name: user.name,
        email: user.email
      })
      // .then(() => {
      //   alert("Your message has been submittedðŸ‘");
      // })
      .catch((error) => {
        alert(error.message);
      });
  }
  return (
        <div className="container my-5">
         <div className="col-md-4 border bg-light mx-auto p-4">
         <div>
          <h3>{newUser ? 'Sign up' : 'Sign in'}</h3>
          <form onSubmit={handleSubmit}>
            {newUser && <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="First Name" required/>}
            <br/>
            {newUser && <input name="name" className="form-control" type="text" onBlur={handleBlur} placeholder="Last Name" required />}
            <br/>
            <input type="text" className="form-control" name="email" onBlur={handleBlur} placeholder="Email" required/>
            <br/>
            <input type="password" className="form-control" name="password" onBlur={handleBlur} placeholder="Password" required/>
            <small style={{color: "#C4CCDB"}}>Password will up to 6 Caracter with a latter </small>
            <br/>
            <br/>
            {newUser ? <input type="submit" style={{backgroundColor: "#005CC8", fontWeight: "700", color: "white"}} className="btn form-control"  value='Sign up'/> :
            <input type="submit" style={{backgroundColor: "#005CC8", fontWeight: "700", color: "white"}} className="btn form-control"  value='Sign in'/>}
          </form>
          <p style={{color: 'red'}}>{user.error}</p>
          { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
          <hr/>
          <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" className="mr-3" id=""/>
          <label htmlFor="newUser">Create ann Account</label>
          <br/>
          <span >
          <Link to="/Dashboard" className="text-dark">
              <span>&#8592;</span> Back To Home
          </Link>
          </span>

        </div>
         </div>
     </div>
    );
};

export default Login;