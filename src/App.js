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
  const [userConfirmed, setUserConfirmed] = useState(false)


  useEffect(async () => {
    try{
      const session = await Auth.currentSession()
      setAuth(true)
      const user = await Auth.currentAuthenticatedUser()
      setUser(user)
      setUserConfirmed(true)
      setIsAuthenticating(false)
    } catch(error) {
      setIsAuthenticating(true)
      setAuth(false)
      console.log(error)
    }
  }, [])


  return (
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => ((!isAuthenticating && authenticated) ? <MainPage {...props} user={user} userConfirmed={userConfirmed} authenticated={authenticated} setAuth={setAuth}/> : <Redirect to="/login" />)}></Route>
        <Route exact path="/login" render={(props) => <Login {...props} user={user} authenticated={authenticated} setAuth={setAuth} setUser={setUser} isAuthenticating={isAuthenticating} setIsAuthenticating={setIsAuthenticating} setUserConfirmed={setUserConfirmed}/>}></Route>
        <Route exact path="/register" render={(props) => <Register {...props} user={user} authenticated={authenticated} setAuth={setAuth} setUser={setUser} isAuthenticating={isAuthenticating} setIsAuthenticating={setIsAuthenticating} />}></Route>
      </Switch>
    </Router>
  );
}

export default App;
