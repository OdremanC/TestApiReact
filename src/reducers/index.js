// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:

//clientes
import clientesData from '../components/Home/reducer';

//stock
import stockData from '../components/Stock/reducer';
//USERS
import usersData from '../components/Users/reducer';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  clientesData,
  stockData,
  usersData,
  router: routerReducer
});

export default rootReducer;
