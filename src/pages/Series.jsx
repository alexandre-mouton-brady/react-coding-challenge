import React from 'react';
import { Card } from '../components';

export default class Series extends React.Component {
  state = {
    series: null,
    error: false,
  };

  componentWillMount() {
    this.props.setTitle('Popular Series');
  }

  async componentDidMount() {
    try {
      const promise = await fetch('/feed/sample.json');
      const { entries } = await promise.json();

      const series = entries
        .filter(mov => mov.releaseYear >= 2010 && mov.programType === 'series')
        .sort((a, b) => a.title > b.title)
        .slice(0, 26);

      this.setState({ series });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { series, error } = this.state;

    if (!series && !error) {
      return <div className="grid content">Loading...</div>;
    } else if (!series && error) {
      return <div className="grid content">Oops, something went wrong...</div>;
    }

    return (
      <div className="grid content">
        {series.map((serie, i) => (
          <Card
            title={serie.title}
            img={serie.images['Poster Art'].url}
            key={`serie-${i}`}
            index={i}
          />
        ))}
      </div>
    );
  }
}
