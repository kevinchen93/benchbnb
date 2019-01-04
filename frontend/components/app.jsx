import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignupForm from './session/signup_form';
import LoginForm from './session/login_form';

const App = (props) => {
  return (
    <div>
      <h1>benchBnB</h1>

      <AuthRoute path="/signup" component={SignupForm} />
      <AuthRoute path="/login" component={LoginForm} />
    </div>
  )
}

export default App;
