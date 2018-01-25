import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { LoginService } from "../services/login.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    let flag = this.loginService.getUserLoggedIn()
    if (flag) {
      let data = next.data;
      if (data) {
        let roles = data.alowRoles;
        if (roles) {
          let accountRole = this.loginService.getRole();
          if (roles.indexOf(accountRole) != -1) {
            return true;
          } else {
            alert("Ban khong co quyen de truy cap vao chuc nang nay");
          }
        } else return true;
      } else return true;
    } else {
      this.router.navigateByUrl("/account/login");
      return false;
    }
  }
}
