import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleSignOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';

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
  let { from } = location.state || { from: { pathname: "/" } };

  // const signOut = () => {
  //     handleSignOut()
  //     .then(res => {
  //         handleResponse(res, false);
  //     })
  // }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
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
      })
    }
    e.preventDefault();
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
            <br/>
            <input type="submit" style={{backgroundColor: "#005CC8", fontWeight: "700", color: "white"}} className="btn form-control"  value={newUser ? 'Sign up' : 'Sign in'}/>
          </form>
          <p style={{color: 'red'}}>{user.error}</p>
          { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
          <hr/>
          <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" className="mr-3" id=""/>
          <label htmlFor="newUser">Create ann Account</label>
          <br/>
          <span >
          <Link to="/Home" className="text-dark">
              <span>&#8592;</span> Back To Home
          </Link>
          </span>

        </div>
         </div>
     </div>
    );
};

export default Login;