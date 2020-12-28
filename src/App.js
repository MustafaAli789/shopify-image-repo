import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MainPage from './Components/MainPage.js'
import Login from './Components/Login'
import Register from './Components/Register'

import {useState} from 'react'

function App() {
  const [authenticated, setAuth] = useState(false)
  const [userInfo, setUserInfo] = useState({"username":null, "password":null})

  let authData = {
    "authenticated": authenticated,
    "setAuth": setAuth,
    "userInfo": userInfo,
    "setUserInfo": setUserInfo
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => authenticated ? <MainPage {...props} authData={authData} /> : <Redirect to="/login" />}></Route>
        <Route exact path="/login" render={(props) => <Login {...props} authData={authData} />}></Route>
        <Route exact path="/register" render={(props) => <Register {...props} authData={authData} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
