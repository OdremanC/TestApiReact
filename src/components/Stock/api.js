// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';


class StockApi {
  static getStockData() {
  	const method = "GET";
  	return apiFetch(API.STOCK.ALLSTOCK,{},'','',method);
  }
  static getStockSingleData(query){
    const method = "GET";
    return apiFetch(API.STOCK.GETSINGLE, {},query,'',method);
  }
  static deleteStockItem(query) {
  	const method = "DELETE";
  	return apiFetch(API.STOCK.DELETE,{},query,'', method);
  }
  static addStockItem(data){
  	const method = "POST";
  	return apiFetch(API.STOCK.ADDITEM,{},'',data,method);
  }
  static editStockItem (query,data){
    const method ="PUT";
    return apiFetch(API.STOCK.EDITITEM,{},query,data,method)
  }
}
export default StockApi;
