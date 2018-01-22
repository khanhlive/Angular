import { Injectable } from "@angular/core";
import { ServiceBase } from "../shared/serviceBase";
import { Http, Headers } from "@angular/http";

@Injectable()
export class LoginService extends ServiceBase {
  private static isUserLoggedIn: boolean;
  private static username;
  private static password;
  private static token;
  constructor(private http: Http) {
    super();
    //this.isUserLoggedIn=false;
    //console.log("constructor");
  }
  // setUserLoggedIn() {
  //   LoginService.isUserLoggedIn = true;
  //   localStorage.setItem("isLoggedIn", "true");
  //   //console.log("set: " + LoginService);
  // }
  getUserLoggedIn(): boolean {
    //console.log("service: " + localStorage.getItem("isLoggedIn"));
    //return (localStorage.getItem('isLoggedIn')=='true');
    let foo=localStorage.getItem('Angular_token');
    return foo!=null;
  }
  getToken():string{
    let foo=localStorage.getItem('Angular_token');
    if(foo==null) return '';
    else {
      let token=JSON.parse(foo);
      return token.access_token;
    }
  }
  getTypeToken():string{
    let foo=localStorage.getItem('Angular_token');
    
    if(foo==null) return 'bearer';
    else {
      let token=JSON.parse(foo);
      //console.log(foo);
      return token.token_type;
    }
  }
  setUserLoggedIn(): Promise<any> {
    let header: Headers = new Headers({
      "Content-Type": "x-www-form-urlencoded"
    });
    return this.http
      .post(
        this.token,
        "grant_type=password&username=khanhnd&password=123456",
        { headers: header }
      )
      .toPromise();
      // .then(res => {
      //   //console.log(res.json());
      //   localStorage.setItem("Angular_token", JSON.stringify(res.json()));
      // })
      // .catch(error => console.log("Error: " + error));
  }
  logout():void{
    localStorage.setItem("Angular_token",null );
  }
}
