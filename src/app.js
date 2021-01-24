import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const App = () => (
  <div title="keepit" subtitle="Keep your expenses within a budget">Welcome to keep it!</div>
);

const AddExpensePage = () => (
  <div title="keepit" subtitle="Keep your expenses within a budget">Create an expense</div>
);

const EditExpensePage = () => (
  <div title="keepit" subtitle="Keep your expenses within a budget">Edit an expense</div>
);

const HelpPage = () => (
  <div title="keepit" subtitle="Keep your expenses within a budget">How can we help?</div>
);

const notFoundPage = () => (
  <div> 404 - NOT FOUND </div>
)

const routes = (
  <HashRouter basename='/'>
    <Switch>
      <Route path='/' component={App} exact={true} />
      <Route path='/create' component={AddExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={notFoundPage} />
    </Switch>
  </HashRouter>
)

ReactDOM.render(routes, document.getElementById('root-app'));
