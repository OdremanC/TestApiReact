//object freeze sirve para que el objeto no pueda ser cambiado
export const API = Object.freeze({
  CLIENT:{
  	CLIENTS: '/user',
  	CLIENT: '/user/',
  	NEWCLIENT: '/user',
  	DELETECLIENT: '/user/',
  	UPDATE: '/user/'
  },
  STOCK:{
  	ALLSTOCK: '/stock',
  	DELETE: '/stock/',
  	ADDITEM: '/stock',
  	EDITITEM: '/stock/'
  }
});
