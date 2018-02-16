// Utils
import { getNewState } from '../../lib/utils/frontend'; 
// Actions
import * as actions from './actions';

const initialState = {
  albums:[],
  selectedAlbun: [],
  photoAlbum:[],
  formError: ''

};
//REDUCER DE FOTOS
export default function galleryReducer(state = initialState, action) {

  const albumsData = Object.assign([], state.albums);
  
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
        photoAlbum: action.payload
      });
    }
    case "CREATE_NEW_ALBUM_SUCCESS": {
      const { payload: { response = [] }} = action;
      const dataInsert = albumsData.concat([action.payload])     
      return getNewState(state, {
        albums: dataInsert
      });
    }
    case "CREATE_NEW_ALBUM_ERROR": {
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        formError: "the form have errors"
      });
    }
    case "DELETE_ALBUM_SUCCESS": {
      const { payload: { response = [] }} = action;
      var index = albumsData.findIndex((album)=>{
        return album._id === action.payload.gallery._id;
      });

      albumsData.splice(index,1);
      return getNewState(state, {
        albums: albumsData
      });
    }
    case "UPLOAD_PHOTOS_SUCCESS": {
      const { payload: { response = [] }} = action;
      const dataInsert = albumsData.concat([action.payload])     
      return getNewState(state, {
        photoAlbum: dataInsert
      });
    }
    case "DELETE_PICS_SUCCESS":{
      const { payload: { response = [] }} = action;
      return getNewState(state, {
        photoAlbum: action.payload
      });
    }
    default:
      return state;
  }
}
