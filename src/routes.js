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
import Gallery from './components/GalleryPhoto';
import AlbumGallery from './components/GalleryPhoto/albumGallery';
import Users from './components/Users';
import Login from './components/Login';
import Page404 from './components/Page404';
import Usuario from './components/Users/user';
import CreateAlbums from './components/GalleryPhoto/createAlbum';





//CONFIGIRACION DE RUTAS DE LA APLICACION
const AppRoutes = () =>
  
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/SingleClient/:id" component={SingleClient} />
      <Route exact path="/gallery" component={Gallery} />
      <Route exact path="/galleryPhoto/:id" component={AlbumGallery} />
      <Route exact path="/albums" component={CreateAlbums} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/user" component={Usuario} />
      <Route component={Page404} />
    </Switch>
  </App>;


export default AppRoutes;

