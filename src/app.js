import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
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
  <div>
    <div> 404 - NOT FOUND </div>
    <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Keepit!</h1>
    <NavLink to='/' activeClassName="active-page" exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName="active-page">New expense</NavLink>
    <NavLink to='/edit' activeClassName="active-page">Modify expense</NavLink>
    <NavLink to='/help' activeClassName="active-page">Need help?</NavLink>
  </header>
);

const routes = (
  <HashRouter basename='/'>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/' component={App} exact={true} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={notFoundPage} />
      </Switch>
    </div>
  </HashRouter>
)

ReactDOM.render(routes, document.getElementById('root-app'));
