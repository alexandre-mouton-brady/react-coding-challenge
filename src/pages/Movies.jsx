import React from 'react';
import { Card } from '../components';

export default class Movies extends React.Component {
  state = {
    movies: null,
    error: false,
  };

  componentWillMount() {
    this.props.setTitle('Popular Movies');
  }

  async componentDidMount() {
    try {
      const promise = await fetch('/feed/sample.json');
      const { entries } = await promise.json();

      const movies = entries
        .filter(mov => mov.releaseYear >= 2010 && mov.programType === 'movie')
        .sort((a, b) => a.title > b.title)
        .slice(0, 26);

      this.setState({ movies });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { movies, error } = this.state;

    console.log(movies);

    if (!movies && !error) {
      return <div className="grid content">Loading...</div>;
    } else if (!movies && error) {
      return <div className="grid content">Oops, something went wrong...</div>;
    }

    return (
      <div className="grid content">
        {movies.map((movie, i) => (
          <Card
            title={movie.title}
            img={movie.images['Poster Art'].url}
            key={`movie-${i}`}
            index={i}
          />
        ))}
      </div>
    );
  }
}
