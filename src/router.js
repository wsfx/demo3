import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import BaseLayout from './layout/BaseLayout';

import UserLayout from "./layout/UserLayout";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <Route path="/users" component={UserLayout} />
        <Route path="/" component={BaseLayout} />
    </Router>
  );
}

export default RouterConfig;
