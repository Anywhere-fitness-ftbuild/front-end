import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

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

    const login = (e) =>{
        e.preventDefault();
        axios
        .post(url,credentials)
        .then((res)=>{
            setLogin 
        })
    }



}