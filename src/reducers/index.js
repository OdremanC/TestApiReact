// Dependencies
import { combineReducers } from 'redux';

// Apps Reducers:

//clientes
import clientesData from '../components/Home/reducer';

// Shared Reducers
import device from './deviceReducer';

const rootReducer = combineReducers({
  device,
  clientesData
});

export default rootReducer;
