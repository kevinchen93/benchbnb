import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignupForm from './session/signup_form';
import LoginForm from './session/login_form';
import BenchIndexContainer from './benches/bench_index_container';
import SearchContainer from './search/search_container';
import BenchFormContainer from './bench_form/bench_form_container';
import BenchShowContainer from './bench_show/bench_show_container';
import ReviewFormContainer from './bench_show/review_form_container';

const App = (props) => {
  return (
    <div>
      <h1>benchBnB</h1>

      <Switch>
        <AuthRoute path="/signup" component={SignupForm} />
        <AuthRoute path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} />
        <ProtectedRoute path="/benches/:benchId/review" component={ReviewFormContainer} />
        <Route exact path = "/benches/:benchId" component={BenchShowContainer} />
        <Route exact path = "/" component={SearchContainer} />
      </Switch>

    </div>
  )
}

export default App;
