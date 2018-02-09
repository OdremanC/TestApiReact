// API
import GalleryApi from './api'; 
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Actions
const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';
const SET_SELECTED_ALBUM = "SET_SELECTED_ALBUM";

export function getAlbunms() {
  return {
      type: GET_ALL_ALBUMS,
      payload: GalleryApi.getAllAlbums()
    }
}
export function setSelected(query) {
  return {
    type: SET_SELECTED_ALBUM,
    payload: GalleryApi.getSingleAlbum(query)
  }
}