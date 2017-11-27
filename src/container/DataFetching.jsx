import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '../components';

export default class DataFetching extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
  };

  state = {
    medias: null,
    error: false,
    percentage: 0,
    imgLoaded: 0,
    totalImg: 26,
    loadingFinished: false,
  };

  componentWillMount() {
    const { title, setTitle } = this.props;

    this.props.setTitle(title);
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
    const { type } = this.props;

    try {
      const isProd = process.env.node === 'production';
      const url = isProd
        ? '/react-coding-challenge/feed/sample.json'
        : '/feed/sample.json';

      const promise = await fetch(url);
      const { entries } = await promise.json();

      const medias = entries
        .filter(med => med.releaseYear >= 2010 && med.programType === type)
        .sort((a, b) => a.title > b.title)
        .slice(0, totalImg);

      this.setState({ medias });
    } catch (err) {
      this.setState({ error: true });
    }
  }

  render() {
    const { medias, error, percentage, loadingFinished } = this.state;

    if (!medias && error && !loadingFinished) {
      return <div className="grid content">Oops, something went wrong...</div>;
    }

    return (
      <div className="grid content">
        <div
          className={!medias || !loadingFinished ? 'loading' : 'loading hidden'}
        >
          Loading {percentage}%
        </div>
        {medias &&
          medias.map((media, i) => (
            <Card
              title={media.title}
              img={media.images['Poster Art'].url}
              key={`media-${i}`}
              setPercentage={this.setPercentage}
              isLoaded={loadingFinished}
            />
          ))}
      </div>
    );
  }
}
