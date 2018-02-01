// API
import HomeApi from './api'; 

// Actions
const PASS_ALL_DATA = 'PASS_ALL_DATA';
const CLIENT_SHOW_SINGLE = 'CLIENT_SHOW_SINGLE';
const INSERT_NEW_CLIENT = 'INSERT_NEW_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const EDIT_CLIENT = 'EDIT_CLIENT';

//debugger
export function passAllData() {
	return {
    	type: PASS_ALL_DATA,
    	payload: HomeApi.passClienteData()
  	}
}
export function passSingleData(query) {
  return {
    	type: CLIENT_SHOW_SINGLE,
    	payload: HomeApi.passingIdClient(query)
  	};
}
export function AddClient(data){
	return {
		type: INSERT_NEW_CLIENT,
		payload: HomeApi.addNewClient(data)
	};
}
export function deleteCliente(query){
	return {
		type: DELETE_CLIENT,
		payload: HomeApi.deleteClient(query)
	};
}
export function editCliente(query,data){
	return {
		type: EDIT_CLIENT,
		payload: HomeApi.editClient(query,data)
	};
}



