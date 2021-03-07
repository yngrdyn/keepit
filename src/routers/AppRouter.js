import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Header } from '../components';
import { AddExpensePage, DashboardPage, EditExpensePage, HelpPage, NotFoundPage } from '../pages';

const AppRouter = () => (
  <HashRouter basename='/'>
    <div>
      <Header></Header>
      <Switch>
        <Route path='/' component={DashboardPage} exact={true} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </HashRouter>
);

export default AppRouter;