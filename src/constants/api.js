//object freeze sirve para que el objeto no pueda ser cambiado
export const API = Object.freeze({
  CLIENT:{
  	CLIENTS: '/client',
  	CLIENT: '/client/',
  	NEWCLIENT: '/client',
  	DELETECLIENT: '/client/',
  	UPDATE: '/client/'
  },
  STOCK:{
  	ALLSTOCK: '/stock',
  	DELETE: '/stock/',
  	ADDITEM: '/stock',
  	EDITITEM: '/stock/',
    GETSINGLE: '/stock/'
  },
  USERS:{
    ALLUSERS: '/users',
    DELETE:  '/users/',
    SETLOGIN: '/users/',
    ADD: '/users',
    EDIT: '/users/'
  }

});
