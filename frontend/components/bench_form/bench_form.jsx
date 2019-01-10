import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);
    this.coords = { lat: props.lat, lng: props.lng };
    this.state = {
      description: '',
      seating: 2,
    };
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('bench[description]', this.state.description);
    formData.append('bench[seating]', this.state.seating);
    formData.append('bench[lat]', this.coords['lat']);
    formData.append('bench[lng]', this.coords['lng']);

    this.props.createBench(formData);
    this.navigateToSearch();
  }

  render() {
    const { description, seating } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div>
        <div>
          <h3>Create a bench!</h3>

          <form onSubmit={this.handleSubmit}>
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
            />

            <label>Number of Seats</label>
            <input
              min="0"
              type="number"
              value={seating}
              onChange={this.update('seating')}
            />

            <label>Latitude</label>
            <input
              type="text"
              disabled
              value={lat}
              onChange={this.update('latitude')}
            />

            <label>Longitude</label>
            <input
              type="text"
              disabled
              value={lng}
              onChange={this.update('longitude')}
            />

            <input
              type="submit"
              value="Create Bench"
            />
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(BenchForm);
