import { Injectable } from "@angular/core";
import { ServiceBase } from "../shared/serviceBase";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { Router } from "@angular/router";
import { ApplicationRole } from "../guard/ApplicationRole";

@Injectable()
export class LoginService extends ServiceBase {
  private static username: string;
  private static password: string;
  private tokenStringName: string = "Angular_token";
  constructor(private http: Http, private router: Router) {
    super();
  }
  getUserLoggedIn(): boolean {
    let foo = localStorage.getItem(this.tokenStringName);
    if (foo == null) {
      return true;
    } else {
      let token = JSON.parse(foo);
      let flag = this.checkTokenExpried();
      if (flag) {
        if (LoginService.username) {
          this.setUserLoggedIn(LoginService.username, LoginService.password);
          return true;
        } else return false;
      } else return !flag;
    }
  }
  checkTokenExpried(): boolean {
    let foo = localStorage.getItem(this.tokenStringName);
    if (foo) {
      let token = JSON.parse(foo);
      if (new Date(token.dateExpried) <= new Date(Date.now())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  }
  getToken(): string {
    let foo = localStorage.getItem(this.tokenStringName);
    if (foo == null) return "";
    else {
      if (this.getUserLoggedIn()) {
        let token = JSON.parse(foo);
        return token.access_token;
      } else {
        let token = JSON.parse(foo);
        return token.access_token;
      }
    }
  }
  getTypeToken(): string {
    let foo = localStorage.getItem(this.tokenStringName);

    if (foo == null) return "bearer";
    else {
      if (this.getUserLoggedIn()) {
        let token = JSON.parse(foo);
        return token.token_type;
      } else {
        let token = JSON.parse(foo);
        return token.token_type;
      }
    }
  }
  setUserLoggedIn(username: string, password: string): Promise<boolean> {
    LoginService.username = username;
    LoginService.password = password;
    let header: Headers = new Headers({
      "Content-Type": "x-www-form-urlencoded"
    });
    return this.http
      .post(
        this.tokenUrl,
        "grant_type=password&username=" + username + "&password=" + password,
        { headers: header }
      )
      .toPromise()
      .then(res => {
        if (res.status == 200) {
          let token = res.json();
          let _date = new Date(Date.now() + token.expires_in * 1000);
          token.dateExpried = _date;
          localStorage.setItem(this.tokenStringName, JSON.stringify(token));
          return true;
        } else {
          alert("Sai tai khoan, mat khau");
          return false;
        }
      })
      .catch(error => {
        //console.log( error);
        if (error.status == 400) {
          alert(error.json().error_description);
        }
        return false;
      });
  }
  logout(): void {
    console.log();
    localStorage.removeItem(this.tokenStringName);
    this.router.navigateByUrl("/account/login");
  }
  getRole(): number {
    let foo = localStorage.getItem(this.tokenStringName);
    // if (this.checkTokenExpried()) {
    //   this.setUserLoggedIn(LoginService.username, LoginService.password);
    //   let token = JSON.parse(foo);
    //   return token.token_type;
    // } else {
    //   let token = JSON.parse(foo);
    //   return token.token_type;
    // }
    return ApplicationRole.SuperAdmin;
  }
}
