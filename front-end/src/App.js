import logo from './logo.svg';
import './App.css';
import Login from './Components/Login'

import React, { Fragment, useState, useEffect } from "react";
import { Route, Switch, useHistory } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path = '/login'>
          <Login/>

        </Route>
      </Switch>
    </Fragment>
)
}

export default App;
