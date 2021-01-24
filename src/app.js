import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => {
  return (
    <div title="keepit" subtitle="Keep your expenses within a budget">Welcome to keep it!</div>
  )
};

const AddExpensePage = () => {
  return (
    <div title="keepit" subtitle="Keep your expenses within a budget">Create an expense</div>
  )
};

const EditExpensePage = () => {
  return (
    <div title="keepit" subtitle="Keep your expenses within a budget">Edit an expense</div>
  )
};

const HelpPage = () => {
  return (
    <div title="keepit" subtitle="Keep your expenses within a budget">How can we help?</div>
  )
};

const routes = (
  <div>
    <BrowserRouter>
      <Route path='/' component={App} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
    </BrowserRouter>
  </div>
)

ReactDOM.render(routes, document.getElementById('root-app'));
