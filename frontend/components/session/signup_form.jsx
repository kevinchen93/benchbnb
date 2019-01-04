import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup, clearSessionErrors } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors();
  }

  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState(
      { username: 'demo', password: '123456' },
      () => { this.props.signup(this.state); }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = this.props.errors.map((msg, idx) => <li key={idx}>{msg}</li>);
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            onChange={this.handleChange('username')}
            value={this.state.username} />
          <input
            type='password'
            placeholder='Password'
            onChange={this.handleChange('password')}
            value={this.state.password} />

          <button>Sign Up</button>
        </form>

        <ul>{errors}</ul>

        <div>
          <p>Have an account? <Link to="/login">Log in</Link></p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
