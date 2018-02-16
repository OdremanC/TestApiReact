// API
import GalleryApi from './api'; 
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Actions
const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';
const SET_SELECTED_ALBUM = "SET_SELECTED_ALBUM";
const CREATE_NEW_ALBUM = "CREATE_NEW_ALBUM";
const DELETE_ALBUM = "DELETE_ALBUM";
const UPLOAD_PHOTOS = "UPLOAD_PHOTOS";
const DELETE_PICS = "DELETE_PICS";


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
export function addNewAlbum(formData) {
 
  const data = {
    idAutor: formData.userID,
    autorName: formData.userName,
    albumTitle: formData.title,
    albumDescription: formData.description,
    portada: formData.portada,
    photos:formData.urls
  };   
  const saveAlbumPromise = GalleryApi.createAlbum(data);
  saveAlbumPromise.then(response =>{
    if (response) {
      window.location("/galleryPhoto/"+response._id);
    }
  });
  return {
    type: CREATE_NEW_ALBUM,
    payload: saveAlbumPromise
  }
}

export function deleteAlbum(query){
  return {
    type: DELETE_ALBUM,
    payload:GalleryApi.deleteAlbumGallery(query)
  }
}
export function uploadPhotos(data){
  return{
    type:UPLOAD_PHOTOS,
    payload: GalleryApi.uploadGalleryPhotos(data)
  }
}
export function deletePics(query,data){
  return{
    type:DELETE_PICS,
    payload: GalleryApi.deleteSomePic(query,data)
  }
}