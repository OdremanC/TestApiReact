//object freeze sirve para que el objeto no pueda ser cambiado
export const API = Object.freeze({
  CLIENT:{
  	CLIENTS: '/client',
  	CLIENT: '/client/',
  	NEWCLIENT: '/client',
  	DELETECLIENT: '/client/',
  	UPDATE: '/client/'
  },
  USERS:{
    ALLUSERS: '/users',
    DELETE:  '/users/',
    SETLOGIN: '/users/',
    ADD: '/users',
    EDIT: '/users/',
    GETSINGLE: '/users/userName/'
  },
  GALLERY:{
    ALBUMS: '/gallery',
    ALBUM: '/gallery/'
  }

});
