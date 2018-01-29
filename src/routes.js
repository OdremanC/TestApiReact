// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import Page404 from './components/Page404';

//CONFIGIRACION DE RUTAS DE LA APLICACION
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>;


export default AppRoutes;

