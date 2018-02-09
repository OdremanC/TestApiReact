// Utils
import { getNewState } from '../../lib/utils/frontend'; 
// Actions
import * as actions from './actions';

const initialState = {
  albums:[],
  selectedAlbun: []
};
//REDUCER DE CLIENTES
export default function clientesReducer(state = initialState, action) {

  const clientes = Object.assign([], state.clientes);
  
  switch(action.type) {
    case "GET_ALL_ALBUMS_SUCCESS": {
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        albums: action.payload
      });
    }
    case "SET_SELECTED_ALBUM_SUCCESS": {
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        selectedAlbun: action.payload
      });
    }
    default:
      return state;
  }
}
