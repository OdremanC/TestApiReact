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
}

export default GalleryApi;
