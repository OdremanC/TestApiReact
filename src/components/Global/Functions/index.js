//cookies
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function getValueLogin (){
    if (cookies.get('isLogged')) {
        if (cookies.get('isLogged').isLogged === true) {
            return true;
        }else{
          return false;
        }
    }
}

export function getUserNameLogin (){
    if (cookies.get('isLogged')) {
        if (cookies.get('isLogged').isLogged === true) {
            return cookies.get('isLogged').userName;
        }else{
          return false;
        }
    }
}