// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:

//clientes
import clientesData from '../components/Home/reducer';

//stock
import stockData from '../components/Stock/reducer';
//USERS
import usersData from '../components/Users/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  clientesData,
  stockData,
  usersData
});

export default rootReducer;
