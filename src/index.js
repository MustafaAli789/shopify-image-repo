import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify'
import config from './config.json'

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_AMPLIFY_COGNITO_REGION,
    userPoolId: process.env.REACT_APP_AMPLIFY_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_AMPLIFY_COGNITO_CLIENT_ID,
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    identityPoolId: process.env.REACT_APP_AMPLIFY_COGNITO_IDENTITY_POOL_ID
  },
  Storage :{
    AWSS3: {
      bucket: process.env.REACT_APP_AMPLIFY_S3_BUCKET,
      region: process.env.REACT_APP_AMPLIFY_S3_REGION
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();