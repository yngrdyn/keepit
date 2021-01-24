import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => {
  return (
    <div title="keepit" subtitle="Keep your expenses within a budget">Welcome to keep it!</div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root-app'));
