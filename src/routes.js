// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Home from './components/Home';
import SingleClient from './components/Home/ShowClientesComp';
import ShowSigleArticle from './components/Stock/ShowSingleArticle';
import Page404 from './components/Page404';
import Stock from './components/Stock';

//CONFIGIRACION DE RUTAS DE LA APLICACION
const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SingleClient/:id" component={SingleClient} />
      <Route exact path="/stock" component={Stock} />
      <Route exact path="/SingleArticle/:id" component={ShowSigleArticle} />
      <Route component={Page404} />
    </Switch>
  </App>;


export default AppRoutes;

