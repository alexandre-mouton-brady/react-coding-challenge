import React from 'react';
import { Card } from '../components';

export default class Movies extends React.Component {
  state = {
    movies: null,
    error: false,
    percentage: 0,
    imgLoaded: 0,
    totalImg: 26,
    loadingFinished: false,
  };

  componentWillMount() {
    this.props.setTitle('Popular Movies');
  }

  setPercentage = () => {
    const imgLoaded = this.state.imgLoaded + 1;
    const percentage = Math.round(imgLoaded / this.state.totalImg * 100);
    let loadingFinished = false;
    if (imgLoaded === this.state.totalImg) loadingFinished = true;

    this.setState({ imgLoaded, percentage, loadingFinished });
  };

  async componentDidMount() {
    const { totalImg } = this.state;

    try {
      const promise = await fetch('/feed/sample.json');
      const { entries } = await promise.json();

      const movies = entries
        .filter(mov => mov.releaseYear >= 2010 && mov.programType === 'movie')
        .sort((a, b) => a.title > b.title)
        .slice(0, totalImg);

      this.setState({ movies });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { movies, error, percentage, loadingFinished } = this.state;

    if (!movies && error && !loadingFinished) {
      return <div className="grid content">Oops, something went wrong...</div>;
    }

    return (
      <div className="grid content">
        <div
          className={!movies || !loadingFinished ? 'loading' : 'loading hidden'}
        >
          Loading {percentage}%
        </div>
        {movies &&
          movies.map((movie, i) => (
            <Card
              title={movie.title}
              img={movie.images['Poster Art'].url}
              key={`movie-${i}`}
              setPercentage={this.setPercentage}
              isLoaded={loadingFinished}
            />
          ))}
      </div>
    );
  }
}
