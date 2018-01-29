// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';

class HomeApi {
  static passClienteData() {
  	var method = "GET";
  	return apiFetch(API.CLIENT.CLIENTS,{},'','',method);
  }
  static passingIdClient(query){
  	return apiFetch(API.CLIENT.CLIENT, {},query);
  }
  static addNewClient(data){
  	var method = "POST";
  	return apiFetch(API.CLIENT.NEWCLIENT, {},'',data,method);
  }
  static deleteClient(query){
  	var method = "DELETE";
  	return apiFetch(API.CLIENT.DELETECLIENT, {},query,'',method);	
  }
  static editClient(query,data){
  	var method = "PUT";
  	return apiFetch(API.CLIENT.UPDATE,{},query, data,method);
  }
}

export default HomeApi;
