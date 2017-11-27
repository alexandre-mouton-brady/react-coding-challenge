import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  componentWillMount() {
    this.props.setTitle('Popular Titles');
  }

  render() {
    return (
      <div className="grid content">
        <Link to="/series" data-title="series" className="card">
          <figure className="card__img">
            <img src="/assets/placeholder.png" alt="Placeholder" />
          </figure>
          <figcaption className="card__caption">Popular Series</figcaption>
        </Link>

        <Link to="/movies" data-title="movies" className="card">
          <figure className="card__img">
            <img src="/assets/placeholder.png" alt="Placeholder" />
          </figure>
          <figcaption className="card__caption">Popular Films</figcaption>
        </Link>
      </div>
    );
  }
}
