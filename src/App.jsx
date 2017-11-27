import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';
import { Header, Footer } from './partials';

export class App extends React.Component {
  state = {
    currentTitle: 'easy money',
  };

  setTitle = newTitle => {
    this.setState({ currentTitle: newTitle });
  };

  render() {
    return (
      <div className="layout">
        <Header />
        <main className="main">
          <h2 className="page-title">{this.state.currentTitle}</h2>
          <Route
            exact
            path="/"
            render={() => <Home setTitle={this.setTitle} />}
          />
        </main>
        <Footer />
      </div>
    );
  }
}
