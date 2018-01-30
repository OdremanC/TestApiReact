// Utils
import { getNewState } from '../../lib/utils/frontend';
// Actions
import * as actions from './actions';

const initialState = {
	inventario: []
}

export default function stockReducer(state = initialState, action){
	const inventario = Object.assign([], state.inventario);

	switch(action.type){
		case "GET_ALL_DATA_SUCCESS":{
			const { payload: { response = [] }} = action;
			
	      	return getNewState(state, {
	        	inventario: action.payload
	      	});
		}
		case "DELETE_ITEM_SUCCESS":{
			const { payload: { response = [] }} = action;
	 	        var index = inventario.findIndex((inventario)=>{
		        return inventario._id === action.payload.stock._id;
		      });

		      inventario.splice(index,1);
		      return getNewState(state, {
		        inventario
		      });
		}
		case "ADD_STOCK_ITEM_SUCCESS":{
			const { payload: { response = [] }} = action;
			inventario.push(action.payload);
			return getNewState(state,{
				inventario
			});
		}
		case "EDIT_STOCK_ITEM_SUCCESS":{
			const { payload: { response = [] }} = action;
	 	        var index = inventario.findIndex((inventario)=>{
		        return inventario._id === action.payload._id;
		    });

		    inventario[index] = action.payload;
		    return getNewState(state, {
		        inventario
		    });
		}

    	default:
      		return state;	


	}
}