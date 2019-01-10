import React from 'react';
import { withRouter } from 'react-router-dom';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5,
      body: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToBenchShow = this.navigateToBenchShow.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  navigateToBenchShow() {
    const url = `/benches/${this.props.match.params.benchId}`;
    this.props.history.push(url);
  }

  handleSubmit() {
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Rating</label>
          <input
            type="number"
            value={this.state.rating}
            onChange={this.update('rating')}
          />

          <br />

          <label>Comment</label>

          <br />

          <textarea
            cols="30"
            rows="10"
            value={this.state.body}
            onChange={this.update('body')}
          />

          <br />

          <input
            type="submit"
          />
        </form>
        <button onClick={this.navigateToBenchShow}>Cancel</button>
      </div>
    )
  }
}

export default withRouter(ReviewForm);
