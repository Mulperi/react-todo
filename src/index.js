import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/containers/App';
import './styles/styles.scss';

const items = [
  { title: 'Eka', id: 1 },
  { title: 'Toka', id: 2 },
  { title: 'Kolkki', id: 3 }
];

ReactDOM.render(<App items={items} />, document.getElementById('react-app'));
