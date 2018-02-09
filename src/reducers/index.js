// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:

//clientes
import clientesData from '../components/Home/reducer';

//USERS
import usersData from '../components/Users/reducer';

//GALLERY
import galleryReducer from '../components/GalleryPhoto/reducer';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  clientesData,
  usersData,
  router: routerReducer,
  galleryReducer
});

export default rootReducer;
