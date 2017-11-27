import React from 'react';
import { Card } from '../components';

export default class Series extends React.Component {
  state = {
    series: null,
    error: false,
    percentage: 0,
    imgLoaded: 0,
    totalImg: 26,
    loadingFinished: false,
  };

  componentWillMount() {
    this.props.setTitle('Popular Series');
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
      const promise = await fetch('/react-coding-challenge/feed/sample.json');
      const { entries } = await promise.json();

      const series = entries
        .filter(mov => mov.releaseYear >= 2010 && mov.programType === 'series')
        .sort((a, b) => a.title > b.title)
        .slice(0, totalImg);

      this.setState({ series });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { series, error, loadingFinished, percentage } = this.state;

    if (!series && error) {
      return <div className="grid content">Oops, something went wrong...</div>;
    }

    return (
      <div className="grid content">
        <div
          className={!series || !loadingFinished ? 'loading' : 'loading hidden'}
        >
          Loading {percentage}%
        </div>
        {series &&
          series.map((serie, i) => (
            <Card
              title={serie.title}
              img={serie.images['Poster Art'].url}
              key={`serie-${i}`}
              setPercentage={this.setPercentage}
              isLoaded={loadingFinished}
            />
          ))}
      </div>
    );
  }
}
