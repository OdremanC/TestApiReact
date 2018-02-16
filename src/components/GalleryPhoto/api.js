// Constants
import { API } from '../../constants/api'; 

// Utils
import { apiFetch } from '../../lib/utils/api';

class GalleryApi {
  static getAllAlbums() {
    const method = "GET";
    return apiFetch(API.GALLERY.ALBUMS,{},'','',method);
  }
  static getSingleAlbum(query){
    const method = "GET";
    return apiFetch(API.GALLERY.ALBUM,{},query,'', method);
  }
  static createAlbum(data){
    const method = "POST";
    return apiFetch(API.GALLERY.ALBUMS, {}, '',data, method);
  }
  static deleteAlbumGallery(query){
    const method = "DELETE";
    return apiFetch(API.GALLERY.DELETEALBUM, {},query, '', method);
  }
  static deleteSomePic(query,data){
    const method = "DELETE";
    return apiFetch(API.GALLERY.DELETEPICS, {},query, data, method); 
  }
}

export default GalleryApi;
