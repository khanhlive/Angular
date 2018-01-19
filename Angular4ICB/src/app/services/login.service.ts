import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
private static isUserLoggedIn:boolean;
private static username;
  constructor() {
    //this.isUserLoggedIn=false;
    console.log('constructor');
   }
   setUserLoggedIn(){
     LoginService.isUserLoggedIn=true;
     localStorage.setItem('isLoggedIn','true');
     console.log('set: '+LoginService);
   }
   getUserLoggedIn():boolean{
    console.log('service: '+localStorage.getItem('isLoggedIn'));
     //return (localStorage.getItem('isLoggedIn')=='true');
     return LoginService.isUserLoggedIn;
   }

}
