// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';


class UsersApi {
  static getUsersData() {
  	const method = "GET";
  	return apiFetch(API.USERS.ALLUSERS,{},'','',method);
  }
  static deleteUserData(query){
    const method = "DELETE";
    return apiFetch(API.USERS.DELETE,{},query,'',method);
  }
  static getUserToLogin(query){
    const method = "GET";
    return apiFetch(API.USERS.DELETE,{},query,'',method);
  }
  static setLogginUser(query,data){
    const method = "PUT";
    return apiFetch(API.USERS.SETLOGIN,{},query,data,method);
  }
}
export default UsersApi;
