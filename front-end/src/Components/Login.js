import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import {setActiveUser} from '../Actions/index'
const url =null;

const Login = (props) => {
    const {setActiveUser} = props;

    const [credentials, setCredentials] = useState({
        Username: '',
        Password: '',
    });

    const [loginError, setLoginError] = useState('');
    const history = useHistory();

    const handleChange = (e)=>{
        setCredentials(
            {
                ...credentials,
                [e.target.name]: e.target.value
            }
        );
    };//end of handleChange

    const login = (e) => {
        e.preventDefault();
          axios
            .post(url, credentials)
            .then((res) => {
              setLoginError('');
              window.localStorage.setItem('token', JSON.stringify(res.data.token));
              window.localStorage.setItem('username', JSON.stringify(res.data.user.Username));
              window.localStorage.setItem('role', JSON.stringify(res.data.user.Role));
              console.log(res.data.user);
              setActiveUser(res.data.user);
              history.push('/classes');
            })
            .catch((err) => {
              console.log({ err })
              setLoginError('Please enter a valid username and password.');
            });
      };//end of login 

      const routeToSignUp = () => {
        history.push('/signup');
    }; //end of routeToSignUp
    return (
        <div>
          <h3>Login to your ANYWHERE FITNESS account!</h3>
    
          <div className="login-form">
            <form onSubmit={login}>
              <label>Username:&nbsp;</label>
              <input
                  type="text"
                  name="Username"
                  value={credentials.Username}
                  onChange={handleChange}
              />
              <br/>
              <br/>
              <label>Password:&nbsp;&nbsp;</label>
              <input
                  type="password"
                  name="Password"
                  value={credentials.Password}
                  onChange={handleChange}
              />
              <br/>
              <br/>
              <input id='login-button' type='submit' value='Login'/>
              <button onClick={routeToSignUp}>Cancel</button>
            </form>
          </div>
    
          <p className="error">{loginError}</p>
        </div>
      );//end of return
};//end of Login
    
const mapStateToProps = (state) => {
    return {
        isLoading: state.IsLoading,
        error: state.Error,
        activeUser: state.ActiveUser,
        allUsers: state.AllUsers,
        classes: state.Classes
    };
}
    
export default connect(mapStateToProps, { setActiveUser })(Login);



