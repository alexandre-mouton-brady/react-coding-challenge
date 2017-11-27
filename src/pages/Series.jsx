import React from 'react';
import { DataFetching } from '../container/index';

const Series = ({ setTitle }) => (
  <DataFetching setTitle={setTitle} title="Popular Series" type="series" />
);

export default Series;
