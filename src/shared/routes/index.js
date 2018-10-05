import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '@app/App';
import Home from '@app/Home';
import About from '@app/About';
import Contact from '@app/Contact';
import Calculator from '@app/Calculator';
import Error404 from '@app/Error404';

const AppRoutes = () => (
  <App>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/calculator" component={Calculator} exact />
      <Route component={Error404} />
    </Switch>
  </App>
);

export default AppRoutes;