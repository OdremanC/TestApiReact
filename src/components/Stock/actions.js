// API
import StockApi from './api'; 

const GET_ALL_DATA = 'GET_ALL_DATA';
const DELETE_ITEM = 'DELETE_ITEM';
const ADD_STOCK_ITEM = "ADD_STOCK_ITEM";
const EDIT_STOCK_ITEM = "EDIT_STOCK_ITEM";
const GET_SINGLE_DATA = "GET_SINGLE_DATA";

export function getAllData() {
	return {
    type: GET_ALL_DATA,
    payload: StockApi.getStockData()
  }
}
export function getSingleData(query) {
	return {
    type: GET_SINGLE_DATA,
    payload: StockApi.getStockSingleData(query)
  }
}
export function deleteItem(query) {
	return{
		type: DELETE_ITEM,
		payload: StockApi.deleteStockItem(query)
	}
}
export function addStock(data){
	return{
		type: ADD_STOCK_ITEM,
		payload: StockApi.addStockItem(data)
	}
}
export function editStock (query,data){
	return {
		type:EDIT_STOCK_ITEM,
		payload: StockApi.editStockItem(query,data)
	}
}