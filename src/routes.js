// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';
//Manejo de props
import PropTypes  from 'prop-types';
//conexion a redux
import { connect } from 'react-redux';

// Components
import App from './components/App';
import Home from './components/Home';
import SingleClient from './components/Home/ShowClientesComp';
import ShowSigleArticle from './components/Stock/ShowSingleArticle';
import Stock from './components/Stock';
import Users from './components/Users';
import Login from './components/Login';
import Page404 from './components/Page404';
import Usuario from './components/Users/user';





//CONFIGIRACION DE RUTAS DE LA APLICACION
const AppRoutes = () =>
  
  <App>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route exact path="/SingleClient/:id" component={SingleClient} />
      <Route exact path="/stock" component={Stock} />
      <Route exact path="/SingleArticle/:id" component={ShowSigleArticle} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={Usuario} />
      <Route component={Page404} />
    </Switch>
  </App>;


export default AppRoutes;

