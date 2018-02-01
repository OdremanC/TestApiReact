// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';

class HomeApi {
  static passClienteData() {
  	const method = "GET";
  	return apiFetch(API.CLIENT.CLIENTS,{},'','',method);
  }
  static passingIdClient(query){
    const method = "GET";
  	return apiFetch(API.CLIENT.CLIENT, {},query,'',method);
  }
  static addNewClient(data){
  	const method = "POST";
  	return apiFetch(API.CLIENT.NEWCLIENT, {},'',data,method);
  }
  static deleteClient(query){
  	const method = "DELETE";
  	return apiFetch(API.CLIENT.DELETECLIENT, {},query,'',method);	
  }
  static editClient(query,data){
  	const method = "PUT";
  	return apiFetch(API.CLIENT.UPDATE,{},query, data,method);
  }
}

export default HomeApi;
