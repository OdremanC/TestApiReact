// Utils
import { getNewState } from '../../lib/utils/frontend'; 
// Actions
import * as actions from './actions';

const initialState = {
  clientes: [],
  cliente: [],
  addClient: false
};
//REDUCER DE CLIENTES
export default function clientesReducer(state = initialState, action) {

  const clientes = Object.assign([], state.clientes);
  
  switch(action.type) {
    case "PASS_ALL_DATA_SUCCESS": {
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        clientes: action.payload
      });
    }
    case 'CLIENT_SHOW_SINGLE_SUCCESS': { 
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        cliente: action.payload
      });
    }
     case "INSERT_NEW_CLIENT_SUCCESS": {
      const { payload: { response = [] }} = action;
      const dataInsert = clientes.concat([action.payload])     
      return getNewState(state, {
        clientes: dataInsert
      });
    }
    case "DELETE_CLIENT_SUCCESS": {
      const { payload: { response = [] }} = action;
      var index = clientes.findIndex((cliente)=>{
        return cliente._id === action.payload.client._id;
      });

      clientes.splice(index,1);
      return getNewState(state, {
        clientes
      });
    }
    case "EDIT_CLIENT_SUCCESS": {
      const { payload: { response = [] }} = action;
      var index = clientes.findIndex((cliente) => {
          return cliente._id === action.payload._id;
      });     

      clientes[index] = action.payload;
      return getNewState(state, {
        clientes
      });
    }

    default:
      return state;
  }
}
