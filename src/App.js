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
import { Auth } from 'aws-amplify'

import {useEffect, useState} from 'react'

function App() {
  const [authenticated, setAuth] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(async () => {
    try{
      const session = await Auth.currentSession()
      setAuth(true)
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      setIsAuthenticating(false)
    } catch(error) {
      setIsAuthenticating(false)
      setAuth(false)
      console.log(error)
    }
  }, [])

  let authData = {
    "authenticated": authenticated,
    "setAuth": setAuth,
    "user": user,
    "setUser": setUser
  }

  return (
    !isAuthenticating && 
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <MainPage {...props} authData={authData} />}></Route>
        <Route exact path="/login" render={(props) => <Login {...props} authData={authData} />}></Route>
        <Route exact path="/register" render={(props) => <Register {...props} authData={authData} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
