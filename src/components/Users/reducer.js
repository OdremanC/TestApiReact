// Utils
import { getNewState } from '../../lib/utils/frontend';
// Actions
import * as actions from './actions';

const initialState = {
	users: [],
	singleUser: [],
	isLogged:false
}

export default function stockReducer(state = initialState, action){
	const users = Object.assign([], state.users);

	switch(action.type){
		case "GET_ALL_USERS_SUCCESS":{
			const { payload: { response = [] }} = action;
	      	return getNewState(state, {
	        	users: action.payload
	      	});
		}
		case "DELETE_USER_SUCCESS":{
			const { payload: { response = [] }} = action;
	      	
			var index = users.findIndex((users)=>{
		        return users._id === action.payload.users._id;
		    });
		    users.splice(index,1);
			return getNewState(state, {
				users
			});
		}
		case 'GET_USER_SUCCESS': { 
	      const { payload: { response = [] }} = action;
	      return getNewState(state, {
	        singleUser: action.payload
	      });
	    }
	    case "SET_LOGGIN_USER_SUCCESS":{
		
			const { payload: { response = [] }} = action;
	      	
			var index = users.findIndex((users)=>{
		        return users._id === action.payload._id;
		    });
		    users[index] = action.payload;
			return getNewState(state, {
				isLogged:action.payload.isLogged,
				users: users
			});
		}
		
    	default:
      		return state;	
	}
}