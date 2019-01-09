import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignupForm from './session/signup_form';
import LoginForm from './session/login_form';
import BenchIndexContainer from './benches/bench_index_container';
import SearchContainer from './search/search_container';

const App = (props) => {
  return (
    <div>
      <h1>benchBnB</h1>

      <AuthRoute path="/signup" component={SignupForm} />
      <AuthRoute path="/login" component={LoginForm} />
      <Route exact path = "/" component={SearchContainer} />
    </div>
  )
}

export default App;
