// API
import UsersApi from './api'; 

const GET_ALL_USERS = 'GET_ALL_USERS';
const DELETE_USER = 'DELETE_USER';
const GET_USER = "GET_USER";
const SET_LOGGIN_USER = "SET_LOGGIN_USER";


export function getAllUsers() {
	return {
    type: GET_ALL_USERS,
    payload: UsersApi.getUsersData()
  }
}
export function deleteUser(query){
	return{
		type:DELETE_USER,
		payload: UsersApi.deleteUserData(query)
	}
}
export function getUser(query){
	return {
		type: GET_USER,
		payload: UsersApi.getUserToLogin(query)
	}
}
export function setLogin(query,data){
	return {
		type: SET_LOGGIN_USER,
		payload: UsersApi.setLogginUser(query,data)
	}
}