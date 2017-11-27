import React from 'react';
import { DataFetching } from '../container/index';

const Movies = ({ setTitle }) => (
  <DataFetching setTitle={setTitle} title="Popular Movies" type="movie" />
);

export default Movies;
