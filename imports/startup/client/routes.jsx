import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import SignUp from '../../ui/SignUp.jsx';
import LogIn from '../../ui/LogIn.jsx';
import Home from '../../ui/Home.jsx';
import App from '../../ui/App.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignUp} /> // 嵌套路由，用户访问/signup时，会先加载App组件，然后在它的内部再加载SignUp组件，<App><SignUp /></App>
      <Route path="/login" component={LogIn} />
    </Route>
  </Router>
);
